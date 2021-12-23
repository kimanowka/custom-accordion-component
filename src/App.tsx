import { Accordion } from "./component/Accordion/Accordion";
import { ContentHeader } from "./component/ContentHeader/ContentHeader";
import { ContentText } from "./component/ContentText/ContentText";
import { ContentWrapper } from "./component/Content/ContentWrapper";
import { Header } from "./component/Header/Header";

export const App = (): JSX.Element => {
  return (
    <Accordion>
      <Header> Это мой первый аккордион</Header>
      <ContentWrapper>
        <ContentHeader id="first">Используется ли здесь context?</ContentHeader>
        <ContentText id="first">
          Да, логика открытия/закрытия написана через context
        </ContentText>
      </ContentWrapper>
      <ContentWrapper>
        <ContentHeader id="second">React?</ContentHeader>
        <ContentText id="second">
          Ну,конечно же, мы же собираемся его переиспользовать
        </ContentText>
      </ContentWrapper>
      <ContentWrapper>
        <ContentHeader id="third">И кто же такой гений?</ContentHeader>
        <ContentText id="third">kimanowka</ContentText>
      </ContentWrapper>
    </Accordion>
  );
};

//  отрисовка visible через  cloneElement  (прокидываем индекс в contentWrapper через cloneElement)
