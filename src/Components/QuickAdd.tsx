import React,{useState} from 'react';
import { Button, 
         Dialog, 
         DialogActions, 
         DialogContent, 
         DialogTitle,
         InputLabel, 
         InputAdornment, 
         FormControl,
         FormLabel,
         FormControlLabel,
         Radio,
         RadioGroup,
         Select,
         MenuItem,
         Input,
         } from '@mui/material';

interface PopupProps {
  open: boolean;
  onClose: () => void;
}

const QuickAdd: React.FC<PopupProps> = ({ open , onClose }) => {
    const [amount,setAmount]=useState("")
    const [mode,setMode]=useState("Income")
    const [category,setCategory]=useState("")
    // const [modeOfPayment,setModeOfPayment]=useState("cash")
    const [date,setDate]=useState("");
    const incomeCategory=["Salary","Gifts","Refund","Other"]
    const expenseCategory=["Food","Entertainment","Other"]
    function handleSubmit(){
        console.log("submit");
        console.log(amount);
        console.log(mode);
        console.log(category);
        console.log(date);
        clearData();
        onClose();
    }
    function clearData(){
        setAmount("");
        setMode("Income");
        setCategory("");
        setDate("");
    }
  return (
    <Dialog fullWidth={true} open={open} onClose={onClose} PaperProps={{
        style: {
          maxWidth: '600px',
          height: '400px', 
        },
      }} >
      <DialogTitle>Add Expenditure</DialogTitle>
      <DialogContent>
      <FormControl fullWidth sx={{ m: 1 }} variant="standard">
          <InputLabel htmlFor="standard-adornment-amount">Amount</InputLabel>
          <Input
            id="standard-adornment-amount"
            value={amount}
            onChange={(e)=>{setAmount(e.target.value)}}
            startAdornment={<InputAdornment position="start">$</InputAdornment>}
          />
        </FormControl>
          <FormControl>
            <FormLabel id="demo-row-radio-buttons-group-label">Mode</FormLabel>
            <RadioGroup
                row
                defaultValue="Income"
                onChange={(e)=>setMode(e.target.value)}
                name="row-radio-buttons-group"
                sx={{marginTop:'-5px'}}
                >
            <FormControlLabel value="Income" control={<Radio />} label="Income" />
            <FormControlLabel value="Expense" control={<Radio />} label="Expense" />
            </RadioGroup>
            <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                <InputLabel id="demo-simple-select-standard-label">Category</InputLabel>
            <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={category}
                onChange={(e)=>setCategory(e.target.value)}
                label="Category">
                {mode === "Income" ? incomeCategory.map((c)=>{return <MenuItem key={c} value={c}>{c}</MenuItem>}): expenseCategory.map((c)=>{return <MenuItem key={c} value={c}>{c}</MenuItem>})}
            </Select>
            </FormControl>
            <FormControl fullWidth >
            <FormLabel sx={{marginBottom:'-20px'}}>Date</FormLabel>
            <Input
                id="date-picker"
                type="date"
                name="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                
            />
            </FormControl>
        </FormControl>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleSubmit} color='primary'>Add</Button>
        <Button onClick={()=>{clearData();onClose()}} color="secondary">Close</Button>
      </DialogActions>
    </Dialog>
  );
};

export default QuickAdd;
