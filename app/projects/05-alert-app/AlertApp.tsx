import Alert from '../components/Alert'
export default function AlertApp () {
  return (
    <div>
      <Alert type={'success'} message={'Successful Login'} />
      <Alert
        type={'info'}
        message={'Time Triggered'}
        delay={true}
        DelayTime={1000}
      />
    </div>
  )
}