import { gql } from '@faststore/core/api'

export const searchFragment = gql(`
  fragment ServerProduct on Query {
    product(locator: $locator) {
      cpp
    }
  }
`)
