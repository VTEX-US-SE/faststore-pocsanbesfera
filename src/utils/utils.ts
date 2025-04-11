// import { Sla } from "../types/shipping";
// import { ClientManyProductsQuery } from "../types/productCarousel";
// import { getCookieValue } from "../hooks/useCookies";
// import { Offers } from "../types/product";
// import { api } from "../../discovery.config";
// import { identifierPartner } from "./identifierTerms";

interface Installment {
  Name: string
  TotalValuePlusInterestRate?: number
  NumberOfInstallments: number
  Value: number
}

interface CommercialOffer {
  Installments: Installment[]
}

interface Product {
  sellerDefault: boolean
  commertialOffer: CommercialOffer
}

export const filterInstallmentValue = (products: Product[]) => {
  const sellerDefaultProduct = products.find(
    (product) => product.sellerDefault === true
  )

  if (!sellerDefaultProduct) return null

  return sellerDefaultProduct.commertialOffer.Installments.filter(
    (installment) => installment.Name.includes('sem juros')
  ).reduce<Installment | null>(
    (maxInstallment, current) =>
      current.NumberOfInstallments > (maxInstallment?.NumberOfInstallments || 0)
        ? current
        : maxInstallment,
    null
  )
}
