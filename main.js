/******************************/
//Your Code Here 
function dayOfWeek(num){
switch(num){
  case 1: return "Monday"
  case 2: return "Tuesday"
  case 3: return "Wednesday"
  case 4: return "Thursday"
  case 5: return "Friday"
  case 6: return "Saturday"
  case 7: return "Sunday"
  default: break
}
}

function identifySeason(num){
  switch(true){
   case 1:
    case 2: 
    break
    case 3:return "Spring"
    case 4:
    case 5: 
    break
    case 6:  return "Summer"
    case 7: 
    case 8: 
    break
    case 9:return "Autumn
    case 10:
    case 11: 
      case 12: return "Winter
    break
    default : "Return valid month."
  }
}

function menuSelection(choice){
  switch(choice){
    case 1:return  "Option 1 selected"
    case 2:return  "Option 2 selected"
    case 3: return "Option 3 selected"
    default:return  "Invalid choice"
  }
}

/****************************/
// Our code here. Don't touch!
if (typeof dayOfWeek === 'undefined') {
    dayOfWeek = undefined
  }
  
  if (typeof identifySeason === 'undefined') {
    identifySeason = undefined
  }
  
  if (typeof menuSelection === 'undefined') {
    menuSelection = undefined
  }

  
  
  module.exports = {
    dayOfWeek, 
    identifySeason, 
    menuSelection
  }
  
