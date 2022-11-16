import * as React from "react";
import {useState} from "react"
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
// import logo from "./logo.png";
import styles from "./TableStyles";

import Radio from "@mui/material/Radio";
import Camera from "./components/camera";

export default function BasicTable({data}) {
  const [open, setOpen] = React.useState(false);

  const [a1, setA1] = useState('');
  const [a2, setA2] = useState('');
  const [a3, setA3] = useState('');
  const [a4, setA4] = useState('');
  const [a5, setA5] = useState('');
  const [a6, setA6] = useState('');
  const [a7, setA7] = useState('');
  const [a8, setA8] = useState('');


  const handleChange = (event) => {
    // setValue(event.target.value);
  };

  return (
    <div style={styles.container}>
      <Camera open={open} setOpen={setOpen} />
      <h1 style={styles.text}>Rewards & Recognition Program</h1>
      <Box sx={styles.data_container}> 
        <Stack direction="row" spacing={2}>
          <Typography sx={styles.text1}>House ID</Typography>
          <Typography sx={styles.text2}>{data?.house_id}</Typography>
        </Stack>

        <Stack direction="row" spacing={2}>
          <Typography sx={styles.text1}>House Address</Typography>
          <Typography sx={styles.text2}>{data?.address}</Typography>
        </Stack>

        <Stack direction="row" spacing={2}>
          <Typography sx={styles.text1}>Zone</Typography>
          <Typography sx={styles.text2}>{data?.zone}</Typography>
        </Stack>

        <Stack direction="row" spacing={2}>
          <Typography sx={styles.text1}>Area</Typography>
          <Typography sx={styles.text2}>{data?.address}</Typography>
        </Stack>

        <Stack direction="row" spacing={2}>
          <Typography sx={styles.text1}>Locality</Typography>
          <Typography sx={styles.text2}>{data?.area}</Typography>
        </Stack>

        <Stack direction="row" spacing={2}>
          <Typography sx={styles.text1}>Latitude</Typography>
          <Typography sx={styles.text2}>{data?.lat}</Typography>
        </Stack>

        <Stack direction="row" spacing={2}>
          <Typography sx={styles.text1}>Longitude</Typography>
          <Typography sx={styles.text2}>{data?.lng}</Typography>
        </Stack>
      
      </Box>
      <TableContainer sx={styles.table_container}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell rowSpan={3}>Sl. no</TableCell>
              <TableCell rowSpan={3}>Criteria</TableCell>
              <TableCell rowSpan={3}>Description of criteria</TableCell>
              <TableCell rowSpan={1} colSpan={4}>
                Weightage / Score
              </TableCell>
              <TableCell rowSpan={3}>Marks</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>if NO</TableCell>
              <TableCell>if yes</TableCell>
              <TableCell>if yes</TableCell>
              <TableCell>if yes</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>(0)</TableCell>
              <TableCell>(1)</TableCell>
              <TableCell>(2)</TableCell>
              <TableCell>(3)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell sx={{ verticalAlign: "top" }}>1</TableCell>
              <TableCell sx={{ verticalAlign: "top" }}>App Usage</TableCell>
              <TableCell sx={{ verticalAlign: "top" }}>
                Uses Zimadar nagrik app
                <ul>
                  <li>Shows App (1)</li>
                  <li>Being Used (2)</li>
                  <li>Shows data of D2D through app (3)</li>
                </ul>
              </TableCell>
              <TableCell>
                <Radio
                  name="radio-buttons"
                  inputProps={{ "aria-label": "A" }}
                />
              </TableCell>
              <TableCell>
                <Radio
                  name="radio-buttons"
                  inputProps={{ "aria-label": "A" }}
                />
              </TableCell>
              <TableCell>
                <Radio
                  name="radio-buttons"
                  inputProps={{ "aria-label": "A" }}
                />
              </TableCell>
              <TableCell>
                <Radio
                  name="radio-buttons"
                  inputProps={{ "aria-label": "A" }}
                />
              </TableCell>
              <TableCell>
                <TextField
                  disabled
                  id="outlined-disabled"
                  defaultValue="0"
                  sx={styles.tableDataAlingment}
                />
              </TableCell>
              <TableCell>
                <Button
                  onClick={() => {
                    setOpen(true);
                  }}
                >
                  Open Camera
                </Button>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell sx={{ verticalAlign: "top" }}>2</TableCell>
              <TableCell sx={{ verticalAlign: "top" }}>Awareness</TableCell>
              <TableCell sx={{ verticalAlign: "top" }}>
                Awareness on source segregation
                <ul>
                  <li>Knows about wet and dry (1)</li>
                  <li>Knows about wet , dry and reject waste 2 bin (2)</li>
                  <li>Knows about wet , dry , domestic haz & e-waste (3)</li>
                </ul>
              </TableCell>
              <TableCell>
                <Radio
                  name="radio-buttons"
                  inputProps={{ "aria-label": "A" }}
                />
              </TableCell>
              <TableCell>
                <Radio
                  name="radio-buttons"
                  inputProps={{ "aria-label": "A" }}
                />
              </TableCell>
              <TableCell>
                <Radio
                  name="radio-buttons"
                  inputProps={{ "aria-label": "A" }}
                />
              </TableCell>
              <TableCell>
                <Radio
                  name="radio-buttons"
                  inputProps={{ "aria-label": "A" }}
                />
              </TableCell>
              <TableCell>
                <TextField
                  disabled
                  id="outlined-disabled"
                  defaultValue="0"
                  sx={styles.tableDataAlingment}
                />
              </TableCell>
              <TableCell>
                <Button
                  onClick={() => {
                    setOpen(true);
                  }}
                >
                  Open Camera
                </Button>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell sx={{ verticalAlign: "top" }}>3</TableCell>
              <TableCell sx={{ verticalAlign: "top" }}>
                Provision for Seregation{" "}
              </TableCell>
              <TableCell sx={{ verticalAlign: "top" }}>
                Arrangement to stores segregated waste
                <ul>
                  <li>Wet waste and dry waste (1)</li>
                  <li>Wet , dry and domestic haz (2)</li>
                  <li>
                    Wet , dry , domestic & e-waste in suitable bins/arrangement
                    (3)
                  </li>
                </ul>
              </TableCell>
              <TableCell>
                <Radio
                  name="radio-buttons"
                  inputProps={{ "aria-label": "A" }}
                />
              </TableCell>
              
              <TableCell>
                <Radio
                  name="radio-buttons"
                  inputProps={{ "aria-label": "A" }}
                />
              </TableCell>
              <TableCell>
                <Radio
                  name="radio-buttons"
                  inputProps={{ "aria-label": "A" }}
                />
              </TableCell>
              <TableCell>
                <Radio
                  name="radio-buttons"
                  inputProps={{ "aria-label": "A" }}
                />
              </TableCell>
              <TableCell>
                <TextField
                  disabled
                  id="outlined-disabled"
                  defaultValue="0"
                  sx={styles.tableDataAlingment}
                />
              </TableCell>
              <TableCell>
                <Button
                  onClick={() => {
                    setOpen(true);
                  }}
                >
                  Open Camera
                </Button>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell sx={{ verticalAlign: "top" }}>4</TableCell>
              <TableCell sx={{ verticalAlign: "top" }}>
                Practices segregation at source.
              </TableCell>
              <TableCell sx={{ verticalAlign: "top" }}>
                Keeping segregated waste in bins
                <ul>
                  <li>Wet waste and dry waste (1)</li>
                  <li>Wet , dry and domestic haz (2)</li>
                  <li>
                    Wet , dry , domestic & e-waste in suitable bins/arrangement
                    (3)
                  </li>
                </ul>
              </TableCell>
              <TableCell>
                <Radio
                  name="radio-buttons"
                  inputProps={{ "aria-label": "A" }}
                />
              </TableCell>
              <TableCell>
                <Radio
                  name="radio-buttons"
                  inputProps={{ "aria-label": "A" }}
                />
              </TableCell>
              <TableCell>
                <Radio
                  name="radio-buttons"
                  inputProps={{ "aria-label": "A" }}
                />
              </TableCell>
              <TableCell>
                <Radio
                  name="radio-buttons"
                  inputProps={{ "aria-label": "A" }}
                />
              </TableCell>
              <TableCell>
                <TextField
                  disabled
                  id="outlined-disabled"
                  defaultValue="0"
                  sx={styles.tableDataAlingment}
                />
              </TableCell>
              <TableCell>
                <Button
                  onClick={() => {
                    setOpen(true);
                  }}
                >
                  Open Camera
                </Button>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell sx={{ verticalAlign: "top" }}>5</TableCell>
              <TableCell sx={{ verticalAlign: "top" }}>
                Sanitary waste.
              </TableCell>
              <TableCell sx={{ verticalAlign: "top" }}>
                <ul>
                  <li>Awarreness on sanitary waste disposal (1)</li>
                  <li>
                    Wraps sanitary waste with paper before handling over (2)
                  </li>
                </ul>
              </TableCell>
              <TableCell>
                <Radio
                  name="radio-buttons"
                  inputProps={{ "aria-label": "A" }}
                />
              </TableCell>
              <TableCell>
                <Radio
                  name="radio-buttons"
                  inputProps={{ "aria-label": "A" }}
                />
              </TableCell>
              <TableCell>
                <Radio
                  name="radio-buttons"
                  inputProps={{ "aria-label": "A" }}
                />
              </TableCell>
              <TableCell>
                <Radio
                  name="radio-buttons"
                  inputProps={{ "aria-label": "A" }}
                />
              </TableCell>
              <TableCell>
                <TextField
                  disabled
                  id="outlined-disabled"
                  defaultValue="0"
                  sx={styles.tableDataAlingment}
                />
              </TableCell>
              <TableCell>
                <Button
                  onClick={() => {
                    setOpen(true);
                  }}
                >
                  Open Camera
                </Button>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell sx={{ verticalAlign: "top" }}>6</TableCell>
              <TableCell sx={{ verticalAlign: "top" }}>
                Handling over segerated waste.
              </TableCell>
              <TableCell sx={{ verticalAlign: "top" }}>
                Whether provides in segerated waste
                <ul>
                  <li>Wet seperate & dry seperate (1)</li>
                  <li>Wet , dry and domestic seperate (2)</li>
                  <li>Wet , dry , domestic & e-waste seperate (3)</li>
                </ul>
              </TableCell>
              <TableCell>
                <Radio
                  name="radio-buttons"
                  inputProps={{ "aria-label": "A" }}
                />
              </TableCell>
              <TableCell>
                <Radio
                  name="radio-buttons"
                  inputProps={{ "aria-label": "A" }}
                />
              </TableCell>
              <TableCell>
                <Radio
                  name="radio-buttons"
                  inputProps={{ "aria-label": "A" }}
                />
              </TableCell>
              <TableCell>
                <Radio
                  name="radio-buttons"
                  inputProps={{ "aria-label": "A" }}
                />
              </TableCell>
              <TableCell>
                <TextField
                  disabled
                  id="outlined-disabled"
                  defaultValue="0"
                  sx={styles.tableDataAlingment}
                />
              </TableCell>
              <TableCell>
                <Button
                  onClick={() => {
                    setOpen(true);
                  }}
                >
                  Open Camera
                </Button>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell sx={{ verticalAlign: "top" }}>7</TableCell>
              <TableCell sx={{ verticalAlign: "top" }}>
                Waste reduction initiatives.
              </TableCell>
              <TableCell sx={{ verticalAlign: "top" }}>
                Following Parameters
                <ul>
                  <li>No usage of single use plastic (1)</li>
                  <li>Utilizing waste material (2)</li>
                  <li>Practices onsite composting (3)</li>
                </ul>
              </TableCell>
              <TableCell>
                <Radio
                  name="radio-buttons"
                  inputProps={{ "aria-label": "A" }}
                />
              </TableCell>
              <TableCell>
                <Radio
                  name="radio-buttons"
                  inputProps={{ "aria-label": "A" }}
                />
              </TableCell>
              <TableCell>
                <Radio
                  name="radio-buttons"
                  inputProps={{ "aria-label": "A" }}
                />
              </TableCell>
              <TableCell>
                <Radio
                  name="radio-buttons"
                  inputProps={{ "aria-label": "A" }}
                />
              </TableCell>
              <TableCell>
                <TextField
                  disabled
                  id="outlined-disabled"
                  defaultValue="0"
                  sx={styles.tableDataAlingment}
                />
              </TableCell>
              <TableCell>
                <Button
                  onClick={() => {
                    setOpen(true);
                  }}
                >
                  Open Camera
                </Button>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell sx={{ verticalAlign: "top" }}>8</TableCell>
              <TableCell sx={{ verticalAlign: "top" }}>IEC.</TableCell>
              <TableCell sx={{ verticalAlign: "top" }}>
                Whether coustomer is influncer regarding segregation of waste
              </TableCell>
              <TableCell>
                <Radio
                  name="radio-buttons"
                  inputProps={{ "aria-label": "A" }}
                />
              </TableCell>
              <TableCell>
                <Radio
                  name="radio-buttons"
                  inputProps={{ "aria-label": "A" }}
                />
              </TableCell>
              <TableCell>
                <Radio
                  name="radio-buttons"
                  inputProps={{ "aria-label": "A" }}
                />
              </TableCell>
              <TableCell>
                <Radio
                  name="radio-buttons"
                  inputProps={{ "aria-label": "A" }}
                />
              </TableCell>
              <TableCell>
                <TextField
                  disabled
                  id="outlined-disabled"
                  defaultValue="0"
                  sx={styles.tableDataAlingment}
                />
              </TableCell>
              <TableCell>
                <Button
                  onClick={() => {
                    setOpen(true);
                  }}
                >
                  Open Camera
                </Button>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell>Total Marks</TableCell>
              <TableCell>
                <TextField sx={styles.tableDataAlingment} />
              </TableCell>
              <TableCell>
                <TextField sx={styles.tableDataAlingment} />
              </TableCell>
              <TableCell>
                <TextField sx={styles.tableDataAlingment} />
              </TableCell>
              <TableCell>
                <TextField sx={styles.tableDataAlingment} />
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
