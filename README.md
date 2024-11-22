# GS2 Energia Solar

Este é um projeto desenvolvido com Expo para gerenciar anúncios de energia solar. O projeto possui funcionalidades para **compradores** e **vendedores** de energia solar.

---

## 🚀 Funcionalidades

- Gerenciamento de anúncios de energia solar.
- Telas dedicadas para compradores e vendedores.
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
- **`hooks/`**: Contém hooks personalizados.
  - `useColorScheme.ts`: Hook para obter o esquema de cores.
  - `useColorScheme.web.ts`: Hook para obter o esquema de cores na web.
  - `useThemeColor.ts`: Hook para obter a cor do tema.
- **`scripts/`**: Contém scripts utilitários.
  - `reset-project.js`: Script para resetar o projeto.
- **`types/`**: Contém definições de tipos TypeScript.
  - `router.d.ts`: Definições de tipos para o roteador.
- **`web/`**: Contém arquivos específicos para a versão web da aplicação.

---

## Configurações Adicionais

- **`.gitignore`**: Arquivo de configuração do Git para ignorar arquivos e diretórios.
- **`app.json`**: Arquivo de configuração do Expo.
- **`expo-env.d.ts`**: Definições de tipos para o Expo.
- **`package.json`**: Arquivo de configuração do npm.
- **`tsconfig.json`**: Arquivo de configuração do TypeScript.
- **`README.md`**: Documentação do projeto.

---

## Instalação e Execução

### Instalação das Dependências

Para instalar as dependências do projeto, execute o seguinte comando:

```bash
npm install
```

```bash
npx expo start
```
