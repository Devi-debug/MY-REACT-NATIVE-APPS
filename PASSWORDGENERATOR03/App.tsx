import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';
import safeAreaProvider, {
  SafeAreaProvider,
  SafeAreaView,
} from 'react-native-safe-area-context';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

//Form validation
import * as Yup from 'yup';
import { Formik } from 'formik';
const PasswordSchema = Yup.object().shape({
  passwordLength: Yup.number()
    .min(4, 'Should be min of 4 characters')
    .max(16, 'should be max of 16 characters')
    .required('Length is required'),
});

export default function App() {
  const [password, setPassword] = useState('');
  const [isPassGenerated, setIsPassGenerated] = useState(false);

  const [lowercase, setLowercase] = useState(true);
  const [uppercase, setUppercase] = useState(false);
  const [numbers, setNumbers] = useState(false);
  const [symbols, setSymbols] = useState(false);

  const generatePasswordString = (passwordLength: number) => {
    let characterList = '';

    const upperCaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowerCaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const numberChars = '0123456789';
    const symbolChars = '!@#$%^&*()_+';

    if (uppercase) {
      characterList += upperCaseChars;
    }
    if (lowercase) {
      characterList += lowerCaseChars;
    }

    if (numbers) {
      characterList += numberChars;
    }
    if (symbols) {
      characterList += symbolChars;
    }
    const passwordResult = createPassword(characterList, passwordLength);

    setPassword(passwordResult);
    setIsPassGenerated(true);
  };

  const createPassword = (characters: String, passwordLength: number) => {
    let result = '';
    for (let i = 0; i < passwordLength; i++) {
      const characterIndex = Math.round(Math.random() * characters.length);
      result += characters.charAt(characterIndex);
    }
    return result;
    console.log('hitesh');
  };

  const resetPasswordState = () => {
    setPassword('');
    setIsPassGenerated(false);
    setLowercase(true);
    setUppercase(false);
    setNumbers(false);
    setSymbols(false);
  };

  return (
    <SafeAreaProvider>
      <ScrollView keyboardShouldPersistTaps="handled">
        <SafeAreaView style={styles.appContainer}>
          <View style={styles.formContainer}>
            <Text style={styles.title}>Password Generator</Text>
            <Formik
              initialValues={{ passwordLength: '' }}
              validationSchema={PasswordSchema}
              onSubmit={values => {
                generatePasswordString(Number(values.passwordLength)); //TODO: fix this
              }}
            >
              {({
                values,
                errors,
                touched,
                isValid,
                handleChange,
                handleSubmit,
                handleReset,
                /* and other goodies */
              }) => (
                <>
                  <View style={styles.inputWrapper}>
                    
                    <View style={styles.inputColumn}>
                      <Text style={styles.heading}>Password Length</Text>
                      {touched.passwordLength && errors.passwordLength && (
                        <Text style={styles.errorText}>{errors.passwordLength}</Text>
                      )}
                    </View> 

                    <TextInput
                        style={styles.inputStyle}
                        value={values.passwordLength}
                        onChangeText={handleChange('passwordLength')}
                        placeholder="Ex. 8"
                        keyboardType="numeric"
                      />
                  </View>

                  <View style={styles.inputWrapper}>
                    <Text style={styles.heading}>Include lowercase</Text>
                    <BouncyCheckbox
                      useBuiltInState={false}
                      isChecked={lowercase}
                      onPress={() => setLowercase(!lowercase)}
                      fillColor="#29AB87"
                    />
                  </View>
                  
                  <View style={styles.inputWrapper}>
                    <Text style={styles.heading}>Include uppercase</Text>
                    <BouncyCheckbox
                      useBuiltInState={false}
                      isChecked={uppercase}
                      onPress={() => setUppercase(!uppercase)}
                      fillColor="#FED85D"
                    />
                  </View>
                  <View style={styles.inputWrapper}>
                    <Text style={styles.heading}>Include numbers</Text>
                    <BouncyCheckbox
                      useBuiltInState={false}
                      isChecked={numbers}
                      onPress={() => setNumbers(!numbers)}
                      fillColor="#C9A0DC"
                    />
                  </View>
                  <View style={styles.inputWrapper}>
                    <Text style={styles.heading}>Include symbols</Text>
                    <BouncyCheckbox
                      useBuiltInState={false}
                      isChecked={symbols}
                      onPress={() => setSymbols(!symbols)}
                      fillColor="#FC80A5"
                    />
                  </View>

                  <View style={styles.formActions}>
                    <TouchableOpacity
                    disabled={!isValid}
                    style={styles.primarybtn}
                    onPress={handleSubmit}>
                      <Text style={styles.primaryBtnText}>Generate Password</Text>
                      
                    </TouchableOpacity>
                    <TouchableOpacity
                    style={styles.secondarybtn}
                  onPress={()=>{
                    handleReset();
                    resetPasswordState();
                    }}
                    >
                      <Text style={styles.secondaryBtnText}>Reset</Text>
                    </TouchableOpacity>
                  </View>
                </>
              )}
            </Formik>
          </View>
          {isPassGenerated ? (
            <View style={[styles.card, styles.cardElevated]}>
              <Text style={styles.subTitle}>Result:</Text>
              <Text style={styles.description}>Long Press to copy</Text>
              <Text selectable ={true} style={styles.generatedPassword}>{password}</Text>
            </View>
          ) : null}
        </SafeAreaView>
      </ScrollView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
  },

  formContainer: {
     flex: 1,
    backgroundColor: '#ebe8e8',
    margin: 8,
    padding: 8,
  },

  title: {
    fontSize: 32,
     fontWeight: '600',
     marginBottom: 15,
  },

  inputWrapper: {
    marginBottom: 15,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',

  },
  inputColumn: {
      flexDirection: 'column',

  },
  inputStyle: {
    padding: 8,
    width: '30%',
    borderWidth: 1,
    borderRadius: 4,
    borderColor: '#3a486d',
  },
  errorText: {
    fontSize: 12,
    color: '#ff0d10',
  },
  formActions: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  
  
  heading:{
    fontSize: 15,
  },
  primarybtn:{
    width: 120,
    padding: 10,
    borderRadius: 8,
    marginHorizontal:8,
    backgroundColor:'#5DA3FA'
    
  },
  secondarybtn:{
    width: 120,
    padding: 10,
    borderRadius: 8,
    marginHorizontal:8,
    backgroundColor:'#CAD5E2'
  },

  primaryBtnText:{
    color: '#fff',
    textAlign: 'center',
    fontWeight: '700',
  },
  secondaryBtnText:{
    textAlign: 'center',
  },
  card:{
    padding:12,
    borderRadius: 6,
    marginHorizontal:12,
  },
  cardElevated:{
    backgroundColor: '#ffffff',
    elevation:1,
    shadowOffset:{
      width:1,
      height:1,
    }
  },
  subTitle:{
    fontSize:26,
    fontWeight:'600',
     marginBottom: 2,
  },
  description:{
    color: '#758283',
    marginBottom: 8,
  },
  generatedPassword:{
    fontSize: 22,
    textAlign: 'center',
    marginBottom: 12,
    color:'#000'
  }
});
