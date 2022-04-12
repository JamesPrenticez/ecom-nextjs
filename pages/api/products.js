import { data } from '../../utils/data'
const products = data.products

export default function handler(req, res) {
  res.status(200).json(JSON.stringify(products))
}
