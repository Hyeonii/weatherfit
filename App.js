import React from "react";
import { Alert } from "react-native";
import Loading from "./Loading";
import * as Location from "expo-location";
import axios from "axios";
import Weather from "./Weather";

const API_KEY = "6eada311a1e1441818767e29c4e383a1";

export default class extends React.Component {
  // state => 컴포넌트 내부에서 바뀔수 있는 값
  // props => 읽기 전용
  state = {
    isLoading: true,
  }; // async ()...  await ~ => 이 함수에서 ~ 작업이 끝날때 까지 기다려라
  getWeather = async (latitude, longitude) => {
    const {
      data: {
        main: { temp },
        weather,
      },
    } = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&APPID=${API_KEY}&units=metric`
    ); // setState로 state의 값을 변경해주었다
    this.setState({
      isLoading: false,
      condition: weather[0].main,
      temp,
    });
  };
  getLocation = async () => {
    try {
      // try {...} catch {...} 오류경계, 에러를 잡아내 해당 컴포넌트를 언마운트 한다. 에러를 해당 컴포넌트 안에 격리함으로써 앱의 나머지 부분들이 계속 원활하게 동작할수 있게 해준다
      // React.Component 클래스로부터 파생된 컴포넌트의 경우 'componentDidCatch' 메서드로 처리할 수 있다
      https: await Location.requestForegroundPermissionsAsync();
      const {
        // requestForegroundPermissionsAsync -> 앱이 foreground에 있는 경우 사용자에게 위치에대한 권한을 부여해줄 것을 요청한다. SDK41+부터 사용가능
        coords: { latitude, longitude },
      } = await Location.getCurrentPositionAsync();
      // getCurrentPositionAsync 사용자의 현재 위치에 대한 일회성 배달 요청
      this.getWeather(latitude, longitude);
    } catch (error) {
      Alert.alert("Can't find you.", "So sad");
    }
  };
  componentDidMount() {
    this.getLocation();
  }
  render() {
    const { isLoading, temp, condition } = this.state; // state 불러오기
    return isLoading ? (
      <Loading icon={condition} />
    ) : (
      <Weather temp={Math.round(temp)} condition={condition} />
    );
  }
}
