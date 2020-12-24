import {gql} from "@apollo/client";

export const EXCHANGE_SONGS = gql`{
  allSongs {
    _id
    name
    artist
    cover
  }
}`
