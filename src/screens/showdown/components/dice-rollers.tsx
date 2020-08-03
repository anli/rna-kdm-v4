import {shuffle} from '@utils';
import React, {useState} from 'react';
import {FAB as FABNative} from 'react-native-paper';
import IconNative from 'react-native-vector-icons/MaterialCommunityIcons';
import styled from 'styled-components/native';

const DICE_SIX_FACES = [
  {icon: 'dice-1'},
  {icon: 'dice-2'},
  {icon: 'dice-3'},
  {icon: 'dice-4'},
  {icon: 'dice-5'},
  {icon: 'dice-6'},
];

const DICE_TEN_FACES = [
  {icon: 'numeric-1-box-outline'},
  {icon: 'numeric-2-box-outline'},
  {icon: 'numeric-3-box-outline'},
  {icon: 'numeric-4-box-outline'},
  {icon: 'numeric-5-box-outline'},
  {icon: 'numeric-6-box-outline'},
  {icon: 'numeric-7-box-outline'},
  {icon: 'numeric-8-box-outline'},
  {icon: 'numeric-9-box-outline'},
  {icon: 'dice-d10'},
];

const DICE_HIT_FACES = [
  {icon: 'hand'},
  {icon: 'human-handsdown'},
  {icon: 'human-handsdown'},
  {icon: 'face'},
  {icon: 'shoe-print'},
  {icon: 'alpha-w-box'},
];

const LOADING_ICON = 'timer-sand-empty';

const DiceRollers = () => {
  const [diceTenIcon, setDiceTenIcon] = useState<string>(
    DICE_TEN_FACES[9].icon,
  );
  const [diceSixIcon, setDiceSixIcon] = useState<string>(
    DICE_SIX_FACES[5].icon,
  );
  const [diceHitIcon, setDiceHitIcon] = useState<string>(
    DICE_HIT_FACES[1].icon,
  );

  const rollDice = (
    setDiceIcon: (icon: string) => any,
    faces: {icon: string}[],
  ) => {
    const [{icon: result}] = shuffle(faces);
    setDiceIcon(LOADING_ICON);
    setTimeout(() => setDiceIcon(result), 300);
  };

  const rollDiceTen = () => rollDice(setDiceTenIcon, DICE_TEN_FACES);

  const rollDiceSix = () => rollDice(setDiceSixIcon, DICE_SIX_FACES);

  const rollDiceHit = () => rollDice(setDiceHitIcon, DICE_HIT_FACES);

  return (
    <FabContainer>
      <FAB
        key="diceSixIcon"
        icon={({size, color}: any) => (
          <Icon name={diceSixIcon} size={size} color={color} />
        )}
        onPress={rollDiceSix}
      />
      <FAB
        key="diceHitIcon"
        icon={({size, color}: any) => (
          <Icon name={diceHitIcon} size={size} color={color} />
        )}
        onPress={rollDiceHit}
      />
      <FAB
        icon={({size, color}: any) => (
          <Icon name={diceTenIcon} size={size} color={color} />
        )}
        onPress={rollDiceTen}
      />
    </FabContainer>
  );
};

export default DiceRollers;

const Icon = ({
  name,
  size,
  color,
}: {
  name: string;
  size: number;
  color: string;
}) => <IconStyled name={name} size={2 * size} color={color} />;

const FabContainer = styled.View`
  flex-direction: row;
  position: absolute;
  margin-bottom: 8px;
  margin-left: 16px;
  right: 0;
  bottom: 0;
`;

const FAB = styled(FABNative)`
  margin-right: 16px;
`;

const IconStyled = styled(IconNative)`
  width: 48px;
  height: 48px;
  top: -12px;
  left: -12px;
`;
