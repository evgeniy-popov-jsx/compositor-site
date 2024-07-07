import { Styled } from './styles';
import { SetAbout, SetColloboration, SetCompositions, SetPerformances, SetTexts } from '../Animation/animation.setting';
import { MenuItem } from '../Menu-item/Menu-item';

export const Menu: React.FC = () => {

  return (
    <Styled.Container>
      <MenuItem url='about' setting={SetAbout}/>
      <MenuItem url='collaboration' setting={SetColloboration}/>
      <MenuItem url='compositions' setting={SetCompositions}/>
      <MenuItem url='texts' setting={SetTexts}/>
      <MenuItem url='performances' setting={SetPerformances}/>
    </Styled.Container>
  );
};