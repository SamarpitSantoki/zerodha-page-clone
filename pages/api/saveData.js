// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import fs from 'fs'
import util from 'util'
import { cards, headerData, EventMessage, OrderPage, SideBarData } from '../../data'
export default function handler(req, res) {

  //    const file = fs.open('data copy.js')

  const writeStream = fs.createWriteStream('data.js')
  switch (req.body.field) {
    case 'cards':
      writeStream.write(`export const cards = ${util.inspect([...req.body.data], false, 2, false)};`)
      writeStream.write(`export const headerData = ${util.inspect(headerData, false, 2, false)};`)
      writeStream.write(`export const EventMessage = ${util.inspect(EventMessage, false, 2, false)};`)
      writeStream.write(`export const OrderPage = ${util.inspect(OrderPage, false, 2, false)};`)
      writeStream.write(`export const SideBarData = ${util.inspect(SideBarData, false, 2, false)}`)
      break;
    case 'headerData':
      writeStream.write(`export const cards = ${util.inspect(cards, false, 2, false)};`)
      writeStream.write(`export const headerData = ${util.inspect([...req.body.data], false, 2, false)};`)
      writeStream.write(`export const EventMessage = ${util.inspect(EventMessage, false, 2, false)};`)
      writeStream.write(`export const OrderPage = ${util.inspect(OrderPage, false, 2, false)};`)
      writeStream.write(`export const SideBarData = ${util.inspect(SideBarData, false, 2, false)}`)
      break;
      case 'EventMessage': 
      writeStream.write(`export const cards = ${util.inspect(cards, false, 2, false)};`)
      writeStream.write(`export const headerData = ${util.inspect(headerData, false, 2, false)};`)
      writeStream.write(`export const EventMessage = ${util.inspect([...req.body.data], false, 2, false)};`)
      writeStream.write(`export const OrderPage = ${util.inspect(OrderPage, false, 2, false)};`)
      writeStream.write(`export const SideBarData = ${util.inspect(SideBarData, false, 2, false)}`)
      break;
      case 'OrderPage': 
      writeStream.write(`export const cards = ${util.inspect(cards, false, 2, false)};`)
      writeStream.write(`export const headerData = ${util.inspect(headerData, false, 2, false)};`)
      writeStream.write(`export const EventMessage = ${util.inspect(EventMessage, false, 2, false)};`)
      writeStream.write(`export const OrderPage = ${util.inspect([...req.body.data], false, 2, false)};`)
      writeStream.write(`export const SideBarData = ${util.inspect(SideBarData, false, 2, false)}`)
      break;
      case 'SideBarData': 
      writeStream.write(`export const cards = ${util.inspect(cards, false, 2, false)};`)
      writeStream.write(`export const headerData = ${util.inspect(headerData, false, 2, false)};`)
      writeStream.write(`export const EventMessage = ${util.inspect(EventMessage, false, 2, false)};`)
      writeStream.write(`export const OrderPage = ${util.inspect(OrderPage, false, 2, false)};`)
      writeStream.write(`export const SideBarData = ${util.inspect([...req.body.data], false, 2, false)}`)
      break;
      default: res.status(404).send('Object Not Found.')
  }
  writeStream.end()
  // res.status(200).send(file)
  res.status('200').send('Success')
}
