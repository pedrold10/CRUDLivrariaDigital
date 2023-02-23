# Livraria Digital

### Execução 

Para poder rodar localmente, deve-se alterar o arquivo appsettings.json.

Abra o arquivo appsettings.json e localize a seção "ConnectionStrings".

Altere a string de conexão para apontar para o endereço IP da máquina que está executando o banco de dados.

Salve as alterações no arquivo appsettings.json.

Agora a aplicação estará apontando para o banco de dados localizado em outra máquina. Verifique se a aplicação está conseguindo se conectar ao banco de dados e executar as operações CRUD normalmente.

Exemplo: 

~~~
    "ConnectionStrings": {
        "DefaultConnection": "Server=192.168.1.100;Database=MyDatabase;User Id=MyUser;Password=MyPassword;"
    }
~~~

- Passo 1: Cadastro de livro

Ao abrir a aba de cadastro, será possível inserir o livro com as informações pedidas na aplicação, sendo elas:

    - Título(obrigatório) - limitado a 100 caracteres.
    - Subtítulo(opcional) - limitado a 100 caracteres.
    - Resumo(opcional) - limitado a 500 caracteres.
    - Quantidade de páginas(obrigatório) - limitado a 1000 páginas.
    - Data de publicação(obrigatório) 
    - Editora(obrigatório) - limitado a 100 caracteres.
    - Autor(obrigatório) - limitado a 50 caracteres, um ou mais autores, separados por ";".

- Passo 2: Listagem dos livros

Ao abrir a aba de listagem, será possível visualizar uma tabela com todas as informações inseridas de cada livro.

- Passo 3: Edição ou exclusão de livros

Na tabela que lista os livros, há em cada linha um botão que levará a tela de edição de livros, nela o usuário terá opção de editar ou excluir um livro.

