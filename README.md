# Car Shop

#### Projeto tem como finalidade aplicar os princípios de Programação Orientada a Objetos (`POO`) para a construção de uma API com `CRUD` para gerenciar uma concessionária de veículos. Isso foi feito utilizando o banco de dados `MongoDB`.

<details>
  <summary>
    <strong>Instalação do projeto</strong>
  </summary><br>

  1. Clone o repositório

  - Use o comando: `git clone git@github.com:PedroPDIN/project-car-shop.git`.
  - Entre na pasta do repositório que você acabou de clonar:
    - `cd project-car-shop`

  2. Instale as dependências

  - `npm install`

</details>

<details>
  <summary><strong>Endpoints (Rotas)</strong></summary><br />

  1. Rota para cadastrar dados de um novo carro (POST): `/car`
      - Corpo da Requisição:
        ~~~
        {
          model: "Ferrari Maranello",
          year: 1963,
          color: "red",
          buyValue: 3500000,
          seatsQty: 2,
          doorsQty: 2
        }
        ~~~
      <details>
        <summary><strong>Validações</strong></summary><br />

        * A quantidade de acentos(`seatsQty`) tem que ser superior ou igual a 2.
        * A quantidade de portas(`doorsQty`) tem que ser superior ou igual a 2.
        * E todos os atributos precisam esta válidos.
      </details>

  2. Listagem de todos os carros cadastrados (GET): `/car`
      - Saída (response):
        ~~~
        [
          {
            _id: "4edd40c86762e0fb12000003",
            model: 'Uno da Escada',
            year: 1963,
            color: 'red',
            buyValue: 3500,
            seatsQty: 2,
            doorsQty: 2
          },
          {
            _id: "4edd40c86762e0fb12000113",
            model: 'Uno Quadrado',
            year: 1966,
            color: 'blue',
            buyValue: 3500,
            seatsQty: 2,
            doorsQty: 2
          },
          ...
        ]
        ~~~

  3. Lista um único carro através do seu id (GET): `/car/id`
      - Saída (response):
        ~~~
        {
          _id: "4edd40c86762e0fb12000003",
          model: 'Uno da Escada',
          year: 1963,
          color: 'red',
          buyValue: 3500,
          seatsQty: 2,
          doorsQty: 2
        }
        ~~~

  4. Atualizar registro de um carros através do seu ID (PUT): `/car/id`

      <details>
        <summary><strong>Validações</strong></summary><br />

        * O id tem que possui 24 caracteres.
        * E o corpo da requisição (body) não pode está vazio.
      </details>

  5. Excluir registro de um carro (DELETE): `/car/id`

      <details>
        <summary><strong>Validações</strong></summary><br />

        * O id tem que possui 24 caracteres.
      </details>
</details>

## Status do Projeto - :check: Completo :check:

#### :warning: Importante :warning:: O grupo Trybe foi responsável por realizar o inicio do projeto (e também os commits iniciais), mas precisamente a estrutura do projeto e as configuração dos tests para a avaliação do projeto.