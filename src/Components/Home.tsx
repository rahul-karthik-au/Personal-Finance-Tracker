import React from 'react';
import { Box } from '@mui/system';
import { Typography, Card, CardHeader, CardContent } from '@mui/material';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

function Home() {
  return (
    <>
    <Box sx={{ marginTop:'4%',marginLeft:'12%',width: '88%', minHeight: '92vh', display: 'grid', gridTemplateRows: ' auto 1fr 2fr', gridGap: 6 }}>
      <Box sx={{ gridRow: 1, p: 2 }}>
        <Typography variant="h6">Home</Typography>
      </Box>
        <Card sx={{
            gridRow:2,
            gridColumn: 'span 4',
            backgroundColor: '#ffffe0',
            p: 2,
            border:'2px solid #5c4c16',
            borderRadius: 4
        }}>
            <Box sx={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                <Box>
                <CardHeader title="Income" sx={{ backgroundColor:"#ffffe0"}} />
                    <CardContent sx={{display:'flex',justifyContent:'space-between'}}>
                        <Typography variant="body2" sx={{ color: 'text.secondary', fontSize:'40px' }}>
                            $50.00
                        </Typography>
                </CardContent>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center',marginRight:'20px' }}>
                    <ArrowUpwardIcon color='success' sx={{ fontSize: 100,marginRight: '-50px' }} />
                    <AddIcon color='success' sx={{ zIndex: 1200, fontSize: 30,marginBottom:'-50px' }} />
                </Box>
            </Box>
        </Card>
        <Card sx={{
            gridRow:2,
            gridColumn: 'span 4',
            backgroundColor: '#ffffe0',
            p: 2,
            border:'2px solid #5c4c16',
            borderRadius: 4
        }}>
            <Box sx={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                <Box>
                <CardHeader title="Expenses" sx={{ backgroundColor:"#ffffe0"}} />
                    <CardContent sx={{display:'flex',justifyContent:'space-between'}}>
                        <Typography variant="body2" sx={{ color: 'text.secondary', fontSize:'40px' }}>
                            $50.00
                        </Typography>
                </CardContent>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center',marginRight:'20px' }}>
                    <ArrowDownwardIcon color='error' sx={{ fontSize: 100,marginRight: '-45px' }} />
                    <RemoveIcon color='error' sx={{ zIndex: 1200, fontSize: 30,marginBottom:'-60px' }} />
                </Box>
            </Box>
        </Card>
          <Box
            sx={{
                gridRow:3,
                gridColumn: 'span 8',
                backgroundColor: '#ffffe0',
                p: 2,
                border:'2px solid #5c4c16',
                borderRadius: 4
            }}
          >
            <Typography>Montly Expenditure</Typography>
          </Box>
          <Box
            sx={{
                gridRowStart:2,
                gridRowEnd:4,
                gridColumn: 'span 4',
                backgroundColor: '#ffffe0',
                p: 2,
                border:'2px solid #5c4c16',
                borderRadius: 4
            }}
          >
            <Typography>Category Chart</Typography>
          </Box>
      </Box>
    </>
  )
}

export default Home