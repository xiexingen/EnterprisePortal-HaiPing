import Taro from '@tarojs/taro';
import { View, Map } from '@tarojs/components';
import { PureComponent } from '@/components/BaseComponent';
import BasicPage from '@/components/BasicPage';
import { AtDivider } from 'taro-ui';
import { ClCard } from 'mp-colorui';

class About extends PureComponent {
  onShareAppMessage(share) {
    return {
      ...super.onShareAppMessage(share),
    };
  }

  render() {
    return (
      <BasicPage>
        <ClCard>
          <View className="at-article__content">
            <View className="at-article__section">
              <View className="at-article__p">
                长沙迪博财务服务有限公司，致力于用线上线下相结合的经营理念与成熟服务模式，为奋斗者与创业人士提供一站式企业工商、财税及知识产权服务。
              </View>
              <View className="at-article__p">
                在工商、税务等业务方面：有多年专业服务经验，各项备案以用时短、通过率高，为客户量身定制各类代理记账，公司注销，商标注册等最佳解决方案。赢得大量客户的信赖与好评；
              </View>
              <View className="at-article__p">
                我们本着”专业财税服务、专注财税品质“的服务理念，竭力为广大创业者和企业，提供优质服务。让您事业路途，畅通无忧，长沙迪博一路为您保驾护航。以最合理的价格，提供最优质的服务。长沙迪博愿做您事业上的推手，祝您生意兴隆，财源广进。
              </View>
            </View>
          </View>
        </ClCard>
        <ClCard>
          <View className="at-article">
            <View className="at-article__p">
              地址:长沙市雨花区芙蓉中路三段495号城市快线大厦605房
            </View>
            <View className="at-article__p">座机:0731-84435399</View>
          </View>
          <AtDivider>公司坐标</AtDivider>
          <Map
            latitude={28.152834}
            longitude={112.985292}
            scale={20}
            enableScroll
            optimize
            markers={[
              {
                iconPath: '',
                latitude: 28.152834,
                longitude: 112.985292,
                title: '长沙迪博财务服务有限公司',
              },
            ]}
          />
        </ClCard>
      </BasicPage>
    );
  }
}
export default About;
