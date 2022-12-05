# Design System CashMe

![Coverage Lines](badges/badge-lines.svg)
![Coverage Functions](badges/badge-functions.svg)
![Coverage Branches](badges/badge-branches.svg)
![Coverage Statements](badges/badge-statements.svg)

## Desenvolvimento

### Etapas:

1. Setup do node no ambiente local, incluindo yarn
2. > `yarn`
3. > `yarn setup`
4. > `yarn gitmoji-init`
5. > `yarn storybook`
6. Uma janela com o storybook será aberta automaticamente. Também podendo ser acessado pelo http://localhost:6006/

### Rodar testes

> `yarn test`

### Verificar cobertura de testes

> `yarn coverage`

### Gerar badges de cobertura de testes

> `yarn badges`

### Rodar verificação de linters

> `yarn lint:css`
> `yarn lint:js`

### Scripts internos

1.  `yarn setup`
    Esse script cria certificados para rodar o projeto em **`https`**
2.  `yarn make`
    Esse script gera todos os arquivos com esqueletos montados para (index, testes, stories, etc). O script make recebe argumentos para definir o tipo função a ser criada.
     `--component [nome do componente]`
     `--util [nome do util]`
     Exemplo de uso:
    > `yarn make --component MeuComponent`

- [ ] Criar arquivo CHANGELOG.md
- [ ] Adicionar linter como pré-requisito para deploy
- [ ] Adicionar coverage mínimo como pré-requisito para deploy
