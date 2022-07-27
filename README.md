React Router

Permite que as SPAs tenham mais de uma página:
- Tem funções como Redirect, Nested Routes, NotFound e outros
- Sua cofiguração:

BrwserRouter: Define a área do app que irá trocar as opaginas;
Routes: Define as rotas;
Route: Seria um elemento para cada rota, configura a path e component da rota;

Carregando dados: 
- usado o hook useFetch

![rotaIndex](https://user-images.githubusercontent.com/89535654/181312481-bd811d65-f68a-4466-88f5-016b9bf463bf.png)

Roda dinâmica: 
- Nova route em app.js;
- por padrão seria /products/:id (id é o dado dinâmico onde pode ser qualquer valor;
- Para resgatar a informação usa-se o useParams;

Nested route:
- url mais completa como exemplo: /product/:id/algumacoisa;
- Criado um componente para isso;

Página 404:
- Qualquer rota que não exista ela cai no 404;
- Usado o * no path para representar a função;

Link ativo:
- Troca-se o Link por NavLink na barra de navegação;
- Usa-se o elemento isActive e ativa uma classe se a rota atual for a que está no "to";

Search params:
- É u recurso que permite busca na URL em forma de parâmetro coo "products?query=tenis";
- Utiliza-se o useSearchParams;
![rotaSeach](https://user-images.githubusercontent.com/89535654/181312423-e92e6a7e-39f5-431b-8bab-3900d3f8beaf.png)

Redirect:
- Usa o Navigate do react-router-dom e você é direcionado para a página da url antiga;
