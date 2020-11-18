import React from 'react';
import { Grid, Tabs, Tab, Box, Typography } from "@material-ui/core";

import "../styles/Form.css";
import TotalPrice from "../../components/TotalPrice";
import HookForms from "../../components/HookForms";
import FormPayment from "../../components/FormPayment";
import Section from "../../components/Section";
import SectionMount from "../../components/SectionMount";
import Carrinho from '../../components/Carrinho'

import { connect } from "react-redux"; //conecta ao state geral (store)

// const paes = [
    
    // { item: 'Pão de Batata', tamanho: '60g', valor: 2.5 },
// ];

const opcoes = [
    { 
        title: 'Escolha seu pão:', 
        opcoes: [
            { item: 'Pão de Brioche', tamanho: '65g', valor: 1.5 },
            { item: 'Pão de Batata', tamanho: '70g', valor: 2.0 },
        ], 
    },
    { 
        title: 'Escolha seu queijo:', 
        opcoes: [
            { item: 'Cheddar', tamanho: '65g', valor: 1.5 },
            { item: 'Mussarela', tamanho: '70g', valor: 2.0 },
            { item: 'Coalho', tamanho: '70g', valor: 2.0 },
        ], 
    },
    { 
        title: 'Escolha sua carne:', 
        opcoes: [
            { item: 'Carne de sol', tamanho: '65g', valor: 1.5 },
            { item: 'Hamburguer de Frango com requeijão', tamanho: '70g', valor: 2.0 },
            { item: 'Blend 120g', tamanho: '70g', valor: 2.0 },
            { item: 'Linguiça Toscana Empanada', tamanho: '70g', valor: 2.0 },
        ], 
    },
    { 
        title: 'Outros:', 
        opcoes: [
            { item: 'Macaxeira frita', tamanho: '65g', valor: 1.5 },
            { item: 'Vinagrete', tamanho: '70g', valor: 2.0 },
            { item: 'Salada refogada de repolho', tamanho: '70g', valor: 2.0 },
            { item: 'Linguiça Toscana Empanada', tamanho: '70g', valor: 2.0 },
        ], 
    },
];

const burgues = [
    {
        item: "ARRETADO BURGER",
        ingredients: "Pão de Batata, Carne de sol, Molho Barbecue, Queijo Coalho, Macaxeira Frita, Melaço de Cana",
        valorP: 10.00, valorM: 10.00, valorG: 17.00
    },
    {
        item: "ESTRIBADO BURGER",
        ingredients: "Pão de Batata, Blend 120g, Molho de Queijo, Bacon e Nachos",
        valorP: 0, valorM: 0, valorG: 16.00
    },
    {
        item: "ARROCHADO BURGER",
        ingredients: "Pão de Batata, Linguiça Toscana Empanada, Queijo Prato, Vinagrete, Molho Barbecue",
        valorP: 0, valorM: 0, valorG: 13.00
    },
    {
        item: "PORRETA BURGER",
        ingredients: "Pão de Batata, Hamburguer de Frango com requeijão, Salada refolgada de repolho, Cenoura, Couve Manteiga, Milho e Molho Branco",
        valorP: 0, valorM: 0, valorG: 12.00
    }
]

const refris = [
    {
        item: "Sukita",
        tamanho: "200 ml",
        valor: 2.0,
    },
    {
        item: "Guaraná",
        tamanho: "200 ml",
        valor: 2.0,
    },
    {
        item: "Soda",
        tamanho: "200 ml",
        valor: 2.0,
    },
    {
        item: "Pepsi",
        tamanho: "200 ml",
        valor: 2.0,
    },

];

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
        >
        {value === index && (
            <Box p={3}>
            <Typography>{children}</Typography>
            </Box>
        )}
        </div>
    );
}

function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
}

function FormTemplate() {

    const [open, setOpen] = React.useState(false);
    const [value, setValue] = React.useState(0);

    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <h4 className="py-3 sectionTitle" >Informações do cliente</h4>
                <HookForms />
            </Grid>

            <Grid item xs={12}>
                <Tabs
                    value={value}
                    onChange={(e, newValue) => setValue(newValue)}
                    variant="fullWidth"
                    centered 
                >
                    <Tab label="Cardápio" {...a11yProps(0)} />
                    <Tab label="Monte seu sanduíche" {...a11yProps(1)} >
                    </Tab>
                </Tabs>
                
                <TabPanel value={value} index={0}>
                    <Section nameSection="HAMBÚRGUERES" products={burgues} />
                    <br />
                    <Section nameSection="REFRIGERANTES" products={refris} />
                </TabPanel>

                <TabPanel value={value} index={1}>
                    <SectionMount nameSection="MONTE SEU SANDUÍCHE" opcoes={opcoes} />
                </TabPanel>
            </Grid>
            <Grid item xs={12}>
                <h4 className="py-3 sectionTitle" >Informações de pagamento</h4>
                <FormPayment />
            </Grid>

            <Carrinho open={open} setOpen={setOpen} />
            <TotalPrice setOpen={setOpen} />
        </Grid>
    );
}

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps)(FormTemplate);