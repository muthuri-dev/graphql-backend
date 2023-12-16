
import {gql} from "@apollo/client";

export const GET_AUTHORS = gql`
query Author{
    authors {
        id
        name
        email
        followers
    }
}
`