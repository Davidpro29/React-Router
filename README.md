React Router

Permite que as SPAs tenham mais de uma página:
- Tem funções como Redirect, Nested Routes, NotFound e outros
- Sua cofiguração:

BrwserRouter: Define a área do app que irá trocar as opaginas;
Routes: Define as rotas;
Route: Seria um elemento para cada rota, configura a path e component da rota;

Carregando dados: 
- usado o hook useFetch

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

Redirect:
- Usa o Navigate do react-router-dom e você é direcionado para a página da url antiga;
