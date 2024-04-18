return (
    <ListBox value={value} setValue={languageChanged}>
      {locales.map((locale) => {
        const label = capitalize(languageNames.of(locale) ?? locale);
   
        const option = {
          value: locale,
          label,
        };
   
        return <ListBoxOption key={locale} option={option} />;
      })}
    </ListBox>
  );