import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';
import { AtToast, AtNoticebar, AtButton, AtFab } from 'taro-ui';
import { ClFloatButton } from 'mp-colorui';

export interface BasicPageProps {
  /**
   * 是否显示loading状态
   */
  loading?: boolean;
}

export interface BasicPageStates {}

export default class BasicPage extends Component<BasicPageProps, BasicPageStates> {
  renderLoading = () => {
    const { loading = false } = this.props;
    return <AtToast isOpened={loading} duration={0} hasMask status="loading" text="加载中..." />;
  };

  render() {
    const { children } = this.props;
    return (
      <View className="body animated zoomIn">
        {this.renderLoading()}
        <AtNoticebar single icon="bell" speed={60} marquee>
          长沙迪博财务服务有限公司是一家专业的企业财务服务公司; 专注于代理记账 公司注册 公司刻章
          公司变更 公司注销 个体户注销 异常移出 代理记账 纳税申报 税盘托管 发票领购 个体户建账
          财务整理 财税筹划 财务年检 执照年检 银行开户 公积金代办 社保代办 商标注册 商标转让
          商标续展 版权申请 专利申请等数十个便捷、诚信的服务，为您提供愉悦的企业服务体验!
        </AtNoticebar>
        {children}
        <ClFloatButton
          icon="dianhua"
          size="large"
          bgColor="red"
          closeWithShadow
          direction="vertical"
          move
          onActionClick={index => {
            Taro.makePhoneCall({
              phoneNumber: index === 0 ? '15580068980' : '18874874833',
            }).catch(err => {
              console.log(err);
            });
          }}
          actionList={[
            {
              icon: 'phone',
            },
            {
              icon: 'phone',
            },
          ]}
        />
      </View>
    );
  }
}
