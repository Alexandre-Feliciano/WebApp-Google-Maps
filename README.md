# Web App Geolocation
---

## Descrição
O Web App Geolocation é uma aplicação que utiliza a API de Geolocalização para obter a latitude e longitude do usuário e exibi-las em um mapa interativo.

## Funcionalidades
- Capturar a localização do usuário utilizando a API de Geolocalização do navegador.
- Exibir a latitude e longitude em tempo real.
- Mostrar a localização do usuário em um mapa interativo utilizando uma biblioteca de mapas, como o Leaflet.
- Mensagens de erro caso a localização não possa ser obtida.

## Tecnologias Utilizadas
- **HTML5**: Estrutura do aplicativo.
- **CSS3**: Estilização da interface.
- **JavaScript**: Lógica e integração com APIs.
- **API de Geolocalização**: Para obter a localização do usuário.
- **Biblioteca de Mapas**: Leaflet.js ou Google Maps API para exibição do mapa.
- **Nominatim API**: Para busca de locais.  

## Pré-requisitos
- Navegador compatível com a API de Geolocalização (como Chrome, Firefox, Edge).
- Conexão com a internet.

## Como Funciona
1. O usuário acessa o web app.
2. O navegador solicita permissão para acessar a localização.
3. Se a permissão for concedida, o aplicativo:
   - Obtém a latitude e longitude do usuário.
   - Exibe as coordenadas na tela.
   - Atualiza o mapa para mostrar o ponto correspondente.
4. O usuário pode pesquisar por locais na barra de pesquisa.
   - O mapa será centralizado no local correspondente.
5. Se a permissão for negada ou ocorrer um erro, uma mensagem de erro é exibida.
