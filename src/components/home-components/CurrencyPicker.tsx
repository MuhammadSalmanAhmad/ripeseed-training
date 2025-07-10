import React, { useRef } from "react";
import { CurrencyPickerComponent } from "@youssefprodev/rn-currency-picker";
import { SafeAreaView } from "react-native";

const CurrencyPicker = ({currency,onSelectCurrency}:any) => {

  let currencyPickerRef = useRef<any>(null);
  
  return (
    <SafeAreaView>
      <CurrencyPickerComponent
        currencyPickerRef={(ref) => (currencyPickerRef.current = ref)}
        enable={true}
        darkMode={false}
        currencyCode={currency}
        showFlag={true}
        showCurrencyName={false}
        showCurrencyCode={true}
        onSelectCurrency={(data) => {
          onSelectCurrency(data.code)
        }}
        onOpen={() => console.log("Picker opened")}
        onClose={() => console.log("Picker Closed")}
        showNativeSymbol={false}
        showSymbol={false}
        containerStyle={{
          container: {},
          flagWidth: 25,
          currencyCodeStyle: {
            fontSize: 25,
          },
          currencyNameStyle: {},
          symbolStyle: {},
          symbolNativeStyle: {},
        }}
        modalStyle={{
          container: {
            marginTop: 30,
          },
          searchStyle: {},
          tileStyle: {},
          itemStyle: {
            itemContainer: {},
            flagWidth: 25,
            currencyCodeStyle: {},
            currencyNameStyle: {},
            symbolStyle: {},
            symbolNativeStyle: {},
          },
        }}
        title="Select a Currency"
        searchPlaceholder="Search for a currency"
        showCloseButton={true}
        showModalTitle={true}
      />
    </SafeAreaView>
  );
};

export default CurrencyPicker;
