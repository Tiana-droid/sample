import * as React from "react"
import Table from "@mui/material/Table"
import TableBody from "@mui/material/TableBody"
import TableCell from "@mui/material/TableCell"
import TableContainer from "@mui/material/TableContainer"
import TableHead from "@mui/material/TableHead"
import TableRow from "@mui/material/TableRow"
import Paper from "@mui/material/Paper"

function createData(
  name: string,
  calories: string,
  fat: string,
  carbs: string
) {
  return { name, calories, fat, carbs }
}

const rows = [
  createData(
    "Identifiers, including names, email addresses, IP addresses, postal address, social media account handles and other similar identifiers.",
    "•Directly from individuals• Through automated means •Third-party sources",
    " Our service providers•Our research partners •Our retail partners•Our personal shoppers•Companies that offer co-branded goods•Our affiliates",
    "Our third-party partners, including marketing and advertising partners"
  ),
  createData(
    "Protected classification characteristics under California or federal law, including age.",
    "Directly from individuals",
    " •Our service providers•  Our personal shoppers •Our affiliates•Our retail partners",
    ""
  ),
  createData(
    "Commercial information, including products purchased, obtained, or considered and other purchasing or consuming histories or tendencies.",
    "•       Directly from individuals •       Through automated means •       Third-party sources",
    " •       Our service providers •       Our personal shoppers •       Our retail partners •       Companies that offer co-branded goods•       Our affiliates",
    "Our third-party partners, including marketing and advertising partners"
  ),
  createData(
    "Internet or other electronic network activity information, including browsing history, search history, and information regarding individuals’ interactions with the Services and ads.",
    "•       Through automated means •       Third-party sources",
    " •       Our service providers•       Our affiliates",
    "Our third-party partners, including marketing and advertising partners"
  ),
  createData(
    "Geolocation data",
    "•Through automated means",
    " Our service providers•       Our retailers•       Our affiliates",
    ""
  ),
  createData(
    "Audio, electronic, visual, or similar information, such as telephone call recordings (where permitted by law).",
    "•       Directly from individuals •       Through automated means",
    " •       Our service providers•       Our affiliates",
    ""
  ),
  createData(
    "IInferences, meaning inferences drawn from any of the information in the categories listed above to create a profile about individuals reflecting their preferences and/or behavior.",
    "•       Through automated means  •       Third-party sources",
    " •       Our service providers •       Our affiliates",
    ""
  ),
  createData(
    "Sensitive Personal Information, including driver’s license or state identification card numbers, log-in information for accounts in combination with passwords allowing access to the accounts, and precise geolocation information.",
    "•       Directly from individuals •       Through automated means",
    " •       Our service providers •       Our retailers",
    ""
  ),
]

export default function BasicTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Category of Personal Information</TableCell>
            <TableCell align="left">Source(s)</TableCell>
            <TableCell align="left">
              Categories of parties to whom we have disclosed Personal
              Information for a business purpose
            </TableCell>
            <TableCell align="left">
              Categories of parties with whom we have shared or to whom we have
              sold Personal Information for Behavioral Advertising
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow
              key={index}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="left">{row.calories}</TableCell>
              <TableCell align="left">{row.fat}</TableCell>
              <TableCell align="left">{row.carbs}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
