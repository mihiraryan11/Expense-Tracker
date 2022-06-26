import './Card.css'

const Card = props => {
  const classes = 'card ' + props.className; //white space after card is important

  return <div className={classes}>{props.children}</div>
}

export default Card;