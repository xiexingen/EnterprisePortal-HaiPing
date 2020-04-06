import Taro from '@tarojs/taro';
// import { connect } from '@tarojs/redux';
import { Swiper, SwiperItem, Image } from '@tarojs/components';
import { PureComponent } from '@/components/BaseComponent';
import BasicPage from '@/components/BasicPage';
import DiboPanel from '@/components/DiboPanel';
import { AtDivider, AtTimeline, AtCard } from 'taro-ui';
import { MeProps } from './me.interface';

const swipperImages = [
  require('@/assets/images/pages/1.jpg'),
  require('@/assets/images/pages/2.jpg'),
  require('@/assets/images/pages/3.jpg'),
  require('@/assets/images/pages/4.jpg'),
];

const panelData = [
  {
    title: '企业服务',
    color: 'orange',
    list: [
      { value: '公司注册', desc: '专门渠道专人代办 3天拿照' },
      { value: '公司刻章', desc: '简单快速 诚信办理' },
      { value: '银行开户', desc: '安全快速 一键办理' },
      { value: '社保代办', desc: '多年行业经验 值得交付' },
      { value: '公积金代办', desc: '方便省心 低成本' },
      { value: '执照年检', desc: '贴心省事 竭诚为您服务' },
      { value: '财税筹划', desc: '多年行业经验 专业权威' },
      { value: '税务年检', desc: '专业服务 保障您的权益' },
      { value: '公司变更', desc: '专业律师把关 无后顾之忧' },
      { value: '异常移出', desc: '全程代办 一站式服务' },
      { value: '公司注销', desc: '一站式服务 省心高效' },
      { value: '个体户注销', desc: '省心省力 贴心服务' },
    ],
  },
  {
    title: '财税服务',
    color: 'olive',
    list: [
      { value: '代理记账', desc: '专业的人员 丰富的经验知识' },
      { value: '纳税申报', desc: '正规机构 价格公开透明' },
      { value: '发票领购', desc: '正规机构 安全贴心' },
      { value: '税盘托管', desc: '正规注册机构 成功服务万家企业' },
      { value: '账务整理', desc: '专业、细心 让心中有数、一目了然' },
      { value: '个体户建账', desc: '专业机构 服务众多知名企业' },
    ],
  },
  {
    title: '专利服务',
    color: 'cyan',
    list: [
      { value: '商标注册', desc: '服务实时监控 随时处理问题' },
      { value: '商标变更', desc: '全程代办 一站式服务' },
      { value: '商标转让', desc: '服务众多知名企业 助力企业发展' },
      { value: '商标续展', desc: '多年行业经验 值得信赖' },
      { value: '专利申请', desc: '正规注册机构 成功服务万家企业' },
      { value: '版权申请', desc: '速度快 服务好' },
    ],
  },
];

const serveSteps: any[] = [
  {
    title: '签订协议',
    icon: 'edit',
    color: 'green',
  },
  {
    title: '对接票据',
    icon: 'repeat-play',
    color: 'green',
  },
  {
    title: '会计核算',
    icon: 'money',
    color: 'green',
  },
  {
    title: '账务审核',
    icon: 'eye',
    color: 'green',
  },
  {
    title: '纳税申报',
    icon: 'credit-card',
    color: 'green',
  },
];

class Home extends PureComponent<Partial<MeProps>> {
  onShareAppMessage(share) {
    return {
      ...super.onShareAppMessage(share),
    };
  }

  render() {
    return (
      <BasicPage>
        <Swiper indicatorColor="#999" indicatorActiveColor="#333" circular indicatorDots autoplay>
          {swipperImages.map(item => (
            <SwiperItem key={item}>
              <Image style="width:100%" mode="scaleToFill" src={item} />
            </SwiperItem>
          ))}
        </Swiper>
        {panelData.map(panel => (
          <DiboPanel key={panel.title} color={panel.color} title={panel.title} list={panel.list} />
        ))}
        <AtCard>
          <AtDivider>服务流程</AtDivider>
          <AtTimeline items={serveSteps} />
        </AtCard>
      </BasicPage>
    );
  }
}
export default Home;
