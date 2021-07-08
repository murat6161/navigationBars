import RestoreIcon from '@material-ui/icons/Restore'
import FavoriteIcon from '@material-ui/icons/Favorite'
import LocationIcon from '@material-ui/icons/LocationOn'
import { BottomNavigationAction, BottomNavigation } from '@material-ui/core'
import { makeStyles  } from '@material-ui/core/styles'
import { useState } from 'react'

const useStyles = makeStyles({
    root: {
        width:800,
        margin: "0 auto",
        backgroundColor: "#E0E0E0"
    }
})


const NavigationBar = () => {

    const classes = useStyles()
    const [value, setValue] = useState(0)

    const handleChange = (e, newValue) => {
       
        setValue(newValue)
    }



  return (
    <div>
      <BottomNavigation className={classes.root} value={value} showLabels
        onChange={(e, newValue) => handleChange(e, newValue)}
      >
        <BottomNavigationAction label='Recents' icon={<RestoreIcon/>}/>
        <BottomNavigationAction label='Favorites' icon={<FavoriteIcon/>}/>
        <BottomNavigationAction label='Hearby' icon={<LocationIcon/>}/>

        
      </BottomNavigation>
    </div>
  );
}

export default NavigationBar
