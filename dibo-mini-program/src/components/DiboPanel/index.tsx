import Taro from '@tarojs/taro';
import { View } from '@tarojs/components';
import { AtDivider } from 'taro-ui';
import { ClGrid, ClCard } from 'mp-colorui';
import './index.scss';

interface IDiboPanelProps {
  title: string;
  color: any;
  list: { value: string; image?: string }[];
}

const Dibopanel: Taro.FunctionComponent<IDiboPanelProps> = ({ title, color, list = [] }) => {
  return (
    <ClCard shadow={false}>
      <AtDivider content={title} fontColor={color} lineColor={color} />
      <ClGrid mode="normal" col={2}>
        {list.map(item => (
          <View key={item.value} className="dibo-panel-item">
            <ClCard bgColor={color}>{item.value}</ClCard>
          </View>
        ))}
      </ClGrid>
    </ClCard>
  );
};

export default Dibopanel;
