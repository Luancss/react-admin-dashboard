import {Box, useTheme, Typography} from "@mui/material"
import Header from "../../components/Header"
import Accordion from "@mui/material/Accordion"
import AccordionSummary from "@mui/material/AccordionSummary"
import AccordionDetails from "@mui/material/AccordionDetails"
import ExpendMoreIcon from "@mui/icons-material/ExpandMore"
import { tokens } from "../../theme"

const FAQ = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return <Box m="20px">
    <Header title="Perguntas frequentes" subtitle="Página de perguntas frequentes"/>
    <Accordion defaultExpanded>
      <AccordionSummary expandIcon={<ExpendMoreIcon/>}>
        <Typography color={colors.greenAccent[500]} variant="h5">
        Como faço para acessar o meu painel administrativo
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
        Para acessar o seu painel administrativo, faça login na sua conta usando suas credenciais de usuário. Uma vez logado, você encontrará um link ou botão para acessar o painel administrativo.
        </Typography>
      </AccordionDetails>
    </Accordion>

    <Accordion defaultExpanded>
      <AccordionSummary expandIcon={<ExpendMoreIcon/>}>
        <Typography color={colors.greenAccent[500]} variant="h5">
        Posso personalizar o meu dashboard para exibir informações específicas para o meu negócio?
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
        Sim, você pode personalizar o seu dashboard. Geralmente, há opções de personalização que permitem escolher os widgets, gráficos e métricas que são mais relevantes para o seu negócio. Procure por botões de "personalização" ou "editar dashboard" para começar.
        </Typography>
      </AccordionDetails>
    </Accordion>

    <Accordion defaultExpanded>
      <AccordionSummary expandIcon={<ExpendMoreIcon/>}>
        <Typography color={colors.greenAccent[500]} variant="h5">
        Como faço para adicionar novos usuários ou membros da equipe ao painel administrativo?
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
        Para adicionar novos usuários, acesse a seção de configurações ou administração do dashboard. Lá, você deve encontrar a opção para adicionar novos usuários ou membros da equipe, onde você pode especificar seus papéis e permissões.
        </Typography>
      </AccordionDetails>
    </Accordion>

    <Accordion defaultExpanded>
      <AccordionSummary expandIcon={<ExpendMoreIcon/>}>
        <Typography color={colors.greenAccent[500]} variant="h5">
        Posso exportar dados do meu dashboard para análises mais detalhadas?
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
        Sim, na maioria dos dashboards administrativos, você pode exportar dados. Procure por opções de exportação, como exportar para CSV, Excel ou outros formatos populares, geralmente disponíveis em gráficos e tabelas.
        </Typography>
      </AccordionDetails>
    </Accordion>

    <Accordion defaultExpanded>
      <AccordionSummary expandIcon={<ExpendMoreIcon/>}>
        <Typography color={colors.greenAccent[500]} variant="h5">
        O que devo fazer se eu esqueci minha senha de acesso ao dashboard?
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
        Se você esqueceu sua senha, geralmente há uma opção de "Esqueci minha senha" ou "Redefinir senha" na página de login. Clique nessa opção e siga as instruções para redefinir a senha, que normalmente envolvem receber um e-mail com um link de redefinição de senha. Certifique-se de verificar sua pasta de spam, caso não receba o e-mail imediatamente.
        </Typography>
      </AccordionDetails>
    </Accordion>
  </Box>

}

export default FAQ
