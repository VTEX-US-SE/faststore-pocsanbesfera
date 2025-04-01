import { gql } from '@faststore/core/api'

export const getSellerQuery = gql(`
  query getSeller($id: String!) {
    getSeller(id: $id) {
      id
      name
      logo
      description
    }
  }
`)

export const getPickupPointQuery = gql(`
  query getPickupPoint {
    getPickupPoint {
      id
      name
      description
      instructions
      formatted_address
      address {
        postalCode
        country {
          acronym
          name
        }
        city
        state
        neighborhood
        street
        number
        complement
        reference
        location{
          latitude
          longitude
        }
      }
      isActive
      distance
      seller
      _sort
      businessHours {
        dayOfWeek
        openingTime
        closingTime
      }
      tagsLabel
      pickupHolidays
      isThirdPartyPickup
      accountOwnerName
      accountOwnerId
      parentAccountName
      originalId
    }
  }
`)

export const getCookieByDocumentQuery = gql(`
  query getCookieByDocument($dId: String!) {
    getCookieByDocument(dId: $dId) {
      token
    }
  }
`)
