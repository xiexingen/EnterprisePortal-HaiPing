import Taro from '@tarojs/taro';
import { View, Image } from '@tarojs/components';
import { PureComponent } from '@/components/BaseComponent';
import BasicPage from '@/components/BasicPage';
import { AtDivider } from 'taro-ui';
import { ClCard, ClIcon, ClGrid, ClButton } from 'mp-colorui';

class About extends PureComponent {
  handleCall = phoneNumber => {
    Taro.makePhoneCall({
      phoneNumber,
    });
  };

  render() {
    return (
      <BasicPage>
        <ClCard>
          <AtDivider>客服列表</AtDivider>
          <ClGrid col={3}>
            <ClButton shape="round" bgColor="orange" long openType="contact">
              <ClIcon iconName="people" size="small" color="red" />
              小王
            </ClButton>
            <ClButton shape="round" bgColor="orange" long openType="contact" shadow={false}>
              <ClIcon iconName="people" size="small" color="red" />
              小杨
            </ClButton>
            <ClButton shape="round" bgColor="orange" long openType="contact" shadow={false}>
              <ClIcon iconName="people" size="small" color="red" />
              小陈
            </ClButton>
          </ClGrid>
        </ClCard>
        <ClCard>
          <AtDivider>服务专线</AtDivider>
          <View className="at-article__content">
            <View className="at-article__section">
              <View onClick={this.handleCall.bind(this, '15580068980')} className="at-article__h3">
                杨会计: 155 8006 8980 (微信同号)
              </View>
              <View onClick={this.handleCall.bind(this, '18874874833')} className="at-article__h3">
                王会计: 188 7487 4833 (微信同号)
              </View>
              <View
                onClick={this.handleCall.bind(this, '0731-84435399')}
                className="at-article__h3"
              >
                座机: 0731-84435399
              </View>
            </View>
          </View>
        </ClCard>
        <ClCard>
          <AtDivider>服务名片</AtDivider>
          <View className="at-article__content">
            <View className="at-article__section">
              <Image
                className="at-article__img"
                src={require('@/assets/images/pages/haiping_card.jpg')}
                mode="widthFix"
              />
              <Image
                className="at-article__img"
                src={require('@/assets/images/pages/wxx_card.jpg')}
                mode="widthFix"
              />
            </View>
          </View>
        </ClCard>
      </BasicPage>
    );
  }
}
export default About;
