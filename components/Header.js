import * as React from 'react';
import { Text, View } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import { RadioButton } from 'react-native-paper';

const Header = ({checked, setChecked}) => {
  return (
    <View style={tw.style('flex flex-row items-center py-10')}>
      <Text style={tw.style('font-bold px-2')}>Database: Instacart</Text>
      <View style={tw.style('flex flex-row items-center px-2')}>
          <RadioButton
            value="MySQL"
            status={ checked === 'MySQL' ? 'checked' : 'unchecked' }
            onPress={() => setChecked('MySQL')}
          />
          <Text>MySQL</Text>
      </View>
      <View style={tw.style('flex flex-row items-center ')}>
          <RadioButton style={tw.style()}
            value="Redshift"
            status={ checked === 'Redshift' ? 'checked' : 'unchecked' }
            onPress={() => setChecked('Redshift')}
          />
          <Text>Redshift</Text>
      </View>
    </View>
  );
};

export default Header;