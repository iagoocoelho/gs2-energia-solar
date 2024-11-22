# GS2 Energia Solar

Este é um projeto para faculdade FIAP desenvolvido com React Native Expo para gerenciar anúncios de energia solar. O projeto possui funcionalidades para **compradores** e **vendedores** de energia solar.

---

## 🚀 Funcionalidades

- Gerenciamento de anúncios de energia solar.
- Listagem de Anúncios;
- Impulsionamento de Anúncios;
- Média de Precificação na Região;
- Interface moderna com componentes reutilizáveis.

---

## 📂 Estrutura do Projeto

Abaixo está a estrutura principal de diretórios do projeto:

### Diretórios e Arquivos Principais

- **`.expo/`**: Contém arquivos de configuração do Expo.
- **`app/`**: Contém as telas e layouts da aplicação.
  - `_layout.tsx`: Layout principal da aplicação.
  - `+not-found.tsx`: Tela de erro 404.
  - **`comprador/`**: Telas e componentes relacionados ao comprador.
    - `_layout.tsx`: Layout das telas do comprador.
    - `busca-anuncio.tsx`: Tela de busca de anúncios.
  - **`pagamento/`**: Tela de pagamento.
  - `index.tsx`: Tela inicial da aplicação.
  - **`vendedor/`**: Telas e componentes relacionados ao vendedor.
- **`assets/`**: Contém fontes e imagens utilizadas na aplicação.
- **`components/`**: Contém componentes reutilizáveis.
  - `Avatar.tsx`: Componente de avatar.
  - `Collapsible.tsx`: Componente de colapsar conteúdo.
  - `ExternalLink.tsx`: Componente de link externo.
  - `ThemedText.tsx`: Componente de texto com tema.
  - `ThemedView.tsx`: Componente de view com tema.
  - **`ui/`**: Componentes de interface do usuário.
- **`constants/`**: Contém constantes usadas na aplicação.
  - `Colors.ts`: Definição de cores.

---

## Instalação e Execução localmente

IMPORTANTE: Caso ainda não possua rodado nenhuma aplicação em React Native Expo, deve seguir este guia simples deles: https://docs.expo.dev/get-started/set-up-your-environment/

Basicamente será necessário baixar o aplicativo

### Instalação das Dependências

Após clonar o projeto, para instalar as dependências do projeto, execute o seguinte comando:

```bash
npm install
```

```bash
npx expo start
```
