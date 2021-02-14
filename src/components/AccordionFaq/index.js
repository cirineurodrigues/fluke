import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const sections = [
  {
    key: 1,
    title: '1. Quanto custa um chip da Fluke?',
    content:
      'O envio do chip em si é gratuito, é um presente nosso!\nQuando você efetuar o pedido do seu chip, será necessário o pagamento do primeiro pacote escolhido, que só começará a valer quando você ativar o chip, com ele em mãos :)',
  },
  {
    key: 2,
    title: '2. Como obtenho o rastreio do meu chip?',
    content:
      'Ao pedir o chip pelo nosso aplicativo, você poderá por lá mesmo acompanhar o seu chip, saberá quando ele saiu para entrega e se tivermos qualquer problema para entregá-lo pra você, você receberá uma notificação e um e-mail ativo nosso para que possamos conversar e enviá-lo novamente ;)',
  },
  {
    key: 3,
    title: '3. Quando peço a portabilidade (para manter meu número atual)?',
    content:
      'Você pode pedir a portabilidade durante a ativação do seu chip ou, caso você queira ativar com um número novo para testar, também pode e o pedido de portabilidade é possível em qualquer momento da sua jornada como cliente.\nA portabilidade acontece em cerca de 5 dias úteis. Enquanto isso, o chip antigo continua funcionando e te daremos um número provisório para já ir utilizando os nossos serviços.\nTe avisaremos por e-mail e pelo próprio app quando a portabilidade for concluída e seu número atual vir pro chip Fluke. Aí você já pode se desfazer do antigo ;)',
  },
  {
    key: 4,
    title: '4. Como é a cobertura e antenas da Fluke?',
    content:
      'A Fluke tem cobertura em todo o território nacional e já estamos trabalhando para que, no futuro, nosso chip funcione em outros países.\nNós alugamos as mesmas antenas e infraestrutura já existente em todo o país, então pra qualquer estado que você for, seu verdinho vai funcionar ;)',
  },
  {
    key: 5,
    title: '5. Meu chip chegou, como eu ativo a minha linha?',
    content:
      'Para ativar sua linha basta acessar nosso aplicativo, entrar com o seu login e senha já cadastrados, clicar em chegou e seguir o passo a passo dado no próprio aplicativo!\nVocê precisará ter o chip em mãos, mas inseri-lo no aparelho é a última etapa.',
  },
  {
    key: 6,
    title: '6. Quais as formas de pagamento possíveis?',
    content:
      'A gente aceita cartão de crédito (bandeiras Elo, Mastercard, Visa ou Hipercard), onde você não precisa ser o titular, e também pagamento via PayPal.\nVocê pode pagar pela sua conta PayPal por meio de um cartão de crédito, débito ou pré-pago vinculado à conta, e até recarregar seu PayPal com boleto para usar na Fluke (demora até 3 dias úteis para cair).',
  },
];

const AccordionFaq = () => {
  const [idx, setIdx] = useState(null);

  return (
    <View style={styles.container}>
      {sections.map((cur) => (
        <TouchableOpacity
          key={cur.key}
          style={styles.button}
          activeOpacity={0.9}
          onPress={() => setIdx(cur.key === idx ? null : cur.key)}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>{cur.title}</Text>
            {cur.key === idx && (
              <View>
                <Text style={styles.text}>{cur.content}</Text>
              </View>
            )}
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '90%',

    marginLeft: '5%',
    marginTop: 20,
    marginBottom: 10,
  },
  button: {
    width: '100%',
    marginBottom: 10,
  },
  titleContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 5,
  },
  text: {
    fontSize: 20,
    textAlign: 'justify',
  },
});

export default AccordionFaq;
