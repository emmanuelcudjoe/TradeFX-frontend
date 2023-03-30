import React, { useEffect, useId, useState } from 'react';
import MenuBar from '../components/MenuBar';
import  Box  from '@mui/material/Box';
import { getLiquidityProviders } from './PagesUtils';
import { useParams } from 'react-router-dom';
import { Alert, Container, List, ListItem, Paper, Typography } from '@mui/material';
import Banner from "../images/jumbo.jpg"
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import "./Trade.css"
import TradeModal from '../components/TradeModal';

export default function TradeProvider() {
  const [showButton, setShowButton] = useState(true)
  const [showProvidersButton, setShowProvidersButton] = useState(false)
  const [providerName, setProviderName] = useState("")
  const [open, setOpen] = useState(false)

  const params = useParams();

  const providers = getLiquidityProviders()

  const currencies = [
    {
      "AED": "United Arab Emirates Dirham",
      "AFN": "Afghan Afghani",
      "ALL": "Albanian Lek",
      "AMD": "Armenian Dram",
      "ANG": "Dutch Guilders",
      "AOA": "Angolan Kwanza",
      "ARS": "Argentine Peso",
      "AUD": "Australian Dollar",
      "AWG": "Aruban Florin",
      "AZN": "Azerbaijani Manat",
      "BAM": "Bosnia-Herzegovina Convertible Mark",
      "BBD": "Barbadian Dollar",
      "BDT": "Bangladeshi Taka",
      "BGN": "Bulgarian Lev",
      "BHD": "Bahraini Dinar",
      "BIF": "Burundian Franc",
      "BMD": "Bermudian Dollar",
      "BND": "Bruneian Dollar",
      "BOB": "Bolivian Boliviano",
      "BRL": "Brazilian Real",
      "BSD": "Bahamian Dollar",
      "BTN": "Bhutanese Ngultrum",
      "BWP": "Botswanan Pula",
      "BZD": "Belizean Dollar",
      "CAD": "Canadian Dollar",
      "CDF": "Congolese Franc",
      "CHF": "Swiss Franc",
      "CLF": "Chilean Unit of Account UF",
      "CLP": "Chilean Peso",
      "CNH": "Chinese Yuan Offshore",
      "CNY": "Chinese Yuan",
      "COP": "Colombian Peso",
      "CUP": "Cuban Peso",
      "CVE": "Cape Verdean Escudo",
      "CZK": "Czech Republic Koruna",
      "DJF": "Djiboutian Franc",
      "DKK": "Danish Krone",
      "DOP": "Dominican Peso",
      "DZD": "Algerian Dinar",
      "EGP": "Egyptian Pound",
      "ERN": "Eritrean Nakfa",
      "ETB": "Ethiopian Birr",
      "EUR": "Euro",
      "FJD": "Fijian Dollar",
      "FKP": "Falkland Islands Pound",
      "GBP": "British Pound Sterling",
      "GEL": "Georgian Lari",
      "GHS": "Ghanaian Cedi",
      "GIP": "Gibraltar Pound",
      "GMD": "Gambian Dalasi",
      "GNF": "Guinean Franc",
      "GTQ": "Guatemalan Quetzal",
      "GYD": "Guyanaese Dollar",
      "HKD": "Hong Kong Dollar",
      "HNL": "Honduran Lempira",
      "HRK": "Croatian Kuna",
      "HTG": "Haitian Gourde",
      "HUF": "Hungarian Forint",
      "IDR": "Indonesian Rupiah",
      "ILS": "Israeli New Sheqel",
      "INR": "Indian Rupee",
      "IQD": "Iraqi Dinar",
      "IRR": "Iranian Rial",
      "ISK": "Icelandic Krona",
      "JMD": "Jamaican Dollar",
      "JOD": "Jordanian Dinar",
      "JPY": "Japanese Yen",
      "KES": "Kenyan Shilling",
      "KGS": "Kyrgystani Som",
      "KHR": "Cambodian Riel",
      "KMF": "Comorian Franc",
      "KPW": "North Korean Won",
      "KRW": "South Korean Won",
      "KWD": "Kuwaiti Dinar",
      "KYD": "Caymanian Dollar",
      "KZT": "Kazakhstani Tenge",
      "LAK": "Laotian Kip",
      "LBP": "Lebanese Pound",
      "LKR": "Sri Lankan Rupee",
      "LRD": "Liberian Dollar",
      "LSL": "Basotho Maloti",
      "LYD": "Libyan Dinar",
      "MAD": "Moroccan Dirham",
      "MDL": "Moldovan Leu",
      "MGA": "Malagasy Ariary",
      "MKD": "Macedonian Denar",
      "MMK": "Myanma Kyat",
      "MNT": "Mongolian Tugrik",
      "MOP": "Macanese Pataca",
      "MRU": "Mauritanian Ouguiya",
      "MUR": "Mauritian Rupee",
      "MVR": "Maldivian Rufiyaa",
      "MWK": "Malawian Kwacha",
      "MXN": "Mexican Peso",
      "MYR": "Malaysian Ringgit",
      "MZN": "Mozambican Metical",
      "NAD": "Namibian Dollar",
      "NGN": "Nigerian Naira",
      "NOK": "Norwegian Krone",
      "NPR": "Nepalese Rupee",
      "NZD": "New Zealand Dollar",
      "OMR": "Omani Rial",
      "PAB": "Panamanian Balboa",
      "PEN": "Peruvian Nuevo Sol",
      "PGK": "Papua New Guinean Kina",
      "PHP": "Philippine Peso",
      "PKR": "Pakistani Rupee",
      "PLN": "Polish Zloty",
      "PYG": "Paraguayan Guarani",
      "QAR": "Qatari Rial",
      "RON": "Romanian Leu",
      "RSD": "Serbian Dinar",
      "RUB": "Russian Ruble",
      "RWF": "Rwandan Franc",
      "SAR": "Saudi Arabian Riyal",
      "SCR": "Seychellois Rupee",
      "SDG": "Sudanese Pound",
      "SEK": "Swedish Krona",
      "SGD": "Singapore Dollar",
      "SHP": "Saint Helena Pound",
      "SLL": "Sierra Leonean Leone",
      "SOS": "Somali Shilling",
      "SRD": "Surinamese Dollar",
      "SYP": "Syrian Pound",
      "SZL": "Swazi Emalangeni",
      "THB": "Thai Baht",
      "TJS": "Tajikistani Somoni",
      "TMT": "Turkmenistani Manat",
      "TND": "Tunisian Dinar",
      "TOP": "Tongan Pa'anga",
      "TRY": "Turkish Lira",
      "TTD": "Trinidad and Tobago Dollar",
      "TWD": "Taiwan New Dollar",
      "TZS": "Tanzanian Shilling",
      "UAH": "Ukrainian Hryvnia",
      "UGX": "Ugandan Shilling",
      "USD": "United States Dollar",
      "UYU": "Uruguayan Peso",
      "UZS": "Uzbekistan Som",
      "VND": "Vietnamese Dong",
      "VUV": "Ni-Vanuatu Vatu",
      "WST": "Samoan Tala",
      "XAF": "CFA Franc BEAC",
      "XCD": "East Caribbean Dollar",
      "XDR": "Special Drawing Rights",
      "XOF": "CFA Franc BCEAO",
      "XPF": "CFP Franc",
      "YER": "Yemeni Rial",
      "ZAR": "South African Rand",
      "ZMW": "Zambian Kwacha"
    }
  ]

  useEffect(() => {
    setShowButton(true)
    setShowProvidersButton(false)
    setProviderName(params.providerName)
    console.log(params)
  }, [params.providerName, showButton, showProvidersButton])

  return (
    <>
      <TradeModal open={open} setOpen={setOpen} providerName={params.providerName} />
      <MenuBar showButton showProvidersButton={showProvidersButton} />
      <Box sx={{minHeight: "100vh", backgroundColor: "#e0dfdf69", paddingBottom: "40px"}}>
        <Box sx={{height: "300px", position: "relative"}}>
          <img className="trade-banner" src={Banner} />
          <div className='trade-banner-overlay'>
            <Container sx={{padding: "60px", textAlign: "center", display: "flex", justifyContent: "center"}}>
              {
                providers
                  .filter((provider) => provider.name.toLowerCase() === providerName.toLowerCase())
                  .map((matchedProvider, id) => {
                    return (
                      <>
                        <Box sx={{display: "flex", flexDirection: "column", width: "120px", alignItems: "center", paddingBottom: "60px"}}>
                          <Paper sx={{padding: "20px", borderRadius: "5px", width: "200px", height: "180px"}}>
                            <img className='provider-banner' key={id} src={matchedProvider.image} alt={matchedProvider.name}/>
                            <Typography variant='h4' sx={{color: '#000'}}>{providerName}</Typography>
                          </Paper>
                        </Box>
                      </>
                    )
                  }
                )
              }
            </Container>
          </div>
        </Box>
        <Alert variant="filled" severity="warning">Sorry, we are only able to process cedi to dollar transactions at the time</Alert>
        <Box className="info" sx={{marginTop: "40px"}}>
          <Container sx={{display: "flex", justifyContent: "space-evenly", fontSize: "25px"}}>
            <Paper sx={{padding: "20px", textAlign: "center"}} elevation={0}>
              <Typography variant='h5'>Supported Currencies</Typography>
              <Typography sx={{marginTop: "5px", color: "GrayText", fontWeight: "bold"}}>50+</Typography>
            </Paper>
            <Paper sx={{padding: "20px", textAlign: "center"}} elevation={0}>
              <Typography variant='h5'>Trade Partners</Typography>
              <Typography sx={{marginTop: "5px", color: "GrayText", fontWeight: "bold"}}>300+</Typography>
            </Paper>
            <Paper sx={{padding: "20px", textAlign: "center"}} elevation={0}>
              <Typography variant='h5'>Successful Transaction</Typography>
              <Typography sx={{marginTop: "5px", color: "GrayText", fontWeight: "bold"}}>2500+</Typography>
            </Paper>
            <Paper sx={{padding: "20px", textAlign: "center"}} elevation={0}>
              <Typography variant='h5'>Failed Transaction</Typography>
              <Typography sx={{marginTop: "5px", color: "GrayText", fontWeight: "bold"}}>5</Typography>
            </Paper>
          </Container>
        </Box>
        <Box sx={{marginTop: "80px"}}>
          <Container>
            <Grid container spacing={6}>
              <Grid item xs={8}>
                <Paper elevation={0} sx={{padding: "40px"}}>
                  <Typography variant='h4'>
                    Trade With Us With Off-the-Charts-Benefits
                  </Typography>
                  <Typography variant='p' fontFamily={"inherit"}
                      sx={{marginTop: "30px", display: "inline-block", fontSize: "18px", letterSpacing: "0.4px", marginBottom: "30px"}}>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                    Laboriosam qui maxime ullam numquam? Necessitatibus doloribus pariatur sed quaerat, quas iusto. 
                    At praesentium, deserunt voluptatibus ea illo incidunt quae odit maxime.
                  </Typography>
                  <Button variant='contained' disableElevation onClick={() => setOpen(true)}>Trade</Button>
                </Paper>
              </Grid>
              <Grid item xs={4}>
                <Paper elevation={0} sx={{paddingTop: "40px", paddingBottom: "20px", textAlign: "center"}}>
                  <Typography variant='h5'>Available Currencies</Typography>
                </Paper>
                  <Box>
                    <Paper>
                      <List className='currency-list' sx={{height: "400px", overflowY: "scroll"}}>
                        {
                          Object.entries(currencies[0]).map((entry, id) => {
                            return (
                              <>
                                <ListItem key={id} sx={{background: "rgba(0,0,0,.02)", borderBottom: "1px solid rgba(0,0,0,.1)"}}>
                                  <Typography variant='p'>{entry[1] + " " + `(${entry[0]})`}</Typography>
                                </ListItem>
                              </>
                            )
                          })
                        }
                      </List>
                    </Paper>
                  </Box>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Box>
    </>
  )
}
