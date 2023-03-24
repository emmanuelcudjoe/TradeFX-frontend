import React, {useId} from 'react'
import Marquee from 'react-fast-marquee'
import ABSA from "../images/supportedbanks/absa.png"
import ACCESSBANK from "../images/supportedbanks/access-bank-1.jpg"
import ADB from "../images/supportedbanks/adb.png"
import PRUDENTIAL from "../images/supportedbanks/banner2.png"
import CALBANK from "../images/supportedbanks/calbank.png"
import CBG from "../images/supportedbanks/CBG.png"
import FBN from "../images/supportedbanks/fbn-bank.png"
import FIDELITY from "../images/supportedbanks/fidelity-bank.jpg"
import GCB from "../images/supportedbanks/GCB_brandmark.png"
import HSBC from "../images/supportedbanks/HSBC.jpg"
import SOCIETE_GENERAL from "../images/supportedbanks/Logo_Societe-Generale-filet_692x411.jpg"
import Bank from './Bank'

export default function () {

  const supportedBanks = [
    {
        link: ABSA,
        altText: "absa bank ghana"
    }, 
    {
        link: ACCESSBANK,
        altText: "access bank"
    },
    {
        link: ADB,
        altText: "agricultural development bank"
    },
    {
        link: PRUDENTIAL,
        altText: "prudential bank"
    },
    {
        link: CALBANK,
        altText: "calbank"
    },
    {
        link: CBG,
        altText: "consolidatated bank of ghana"
    }, 
    {
        link: FBN,
        altText: "fbn bank"
    }, 
    {
        link: FIDELITY,
        altText: "fidelity bank ghana"
    }, 
    {
        link: GCB,
        altText: "Ghana Commercial Bank"
    }, 
    {
        link: HSBC,
        altText: "HSBC bank"
    }, 
    {
        link: SOCIETE_GENERAL,
        altText: "Societe General Ghana"
    }
  ]
  return (
    <>
        <Marquee gradientWidth={700}>
            {
                supportedBanks.map((supportedBank, id) => {
                    return (
                        <Bank key={useId() + id} bankInfo={supportedBank}/>
                    )
                })
            }
        </Marquee>
    </>
  )
}
