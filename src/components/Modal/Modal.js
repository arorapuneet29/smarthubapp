import React from 'react'
import PropTypes from 'prop-types'
import { Modal as BaseModal, StyleSheet, View } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import { colors } from 'theme'
import Text from '../Text'
import scale from '../../utils/scale'

class Modal extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      timer: null,
      counter: 0,
    }
  }

  componentDidMount() {
    const timer = setInterval(this.tick, 1000)
    this.setState({ timer })
  }

  componentWillUnmount() {
    const { timer } = this.state
    clearInterval(timer)
  }

  tick = () => {
    this.setState((prevState) => ({ counter: prevState.counter + 10 }))
  }

  render() {
    const styles = StyleSheet.create({
      centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
      },
      modalView: {
        backgroundColor: 'white',
        borderRadius: 5,
        alignItems: 'center',
        width: '90%',
      },
      heading: {
        marginVertical: scale(6),
        fontSize: scale(18),
        color: 'black',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        textAlign: 'center',
      },
      progressContianer: {
        width: '90%',
        height: 8,
        backgroundColor: 'white',
        borderRadius: 20,
        marginVertical: scale(10),

        elevation: 5,
      },
      progress: {
        width: '30%',
        height: 8,
        borderRadius: 20,
        backgroundColor: colors.darkBlue,
      },
      innerTextContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: scale(10),
      },
      iconContainer: {
        width: 60,
        height: 60,
        borderRadius: 60 / 2,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.darkBlue,
        marginVertical: scale(10),
      },
    })
    const { modalVisible, details, onNavigate } = this.props
    const { counter } = this.state

    if (counter >= 130) onNavigate('AddAHub')

    return (
      <View style={styles.centeredView}>
        <BaseModal animationType="slide" transparent visible={modalVisible}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              {counter >= 100 ? (
                <>
                  <Text style={styles.heading} content="Done" />
                  <Text content={details?.phoneNo} />
                  <View style={styles.iconContainer}>
                    <MaterialCommunityIcons
                      name="check"
                      color="white"
                      size={60 * 0.5}
                    />
                  </View>
                </>
              ) : (
                <>
                  <Text style={styles.heading} content="Verifying" />
                  <Text content={details?.phoneNo} />
                  <View style={styles.progressContianer}>
                    <View style={[styles.progress, { width: `${counter}%` }]} />
                  </View>
                  <View style={styles.innerTextContainer}>
                    <Text content="This might take a few mintutes" />
                    <Text content={"please don't leave the app"} />
                  </View>
                </>
              )}
            </View>
          </View>
        </BaseModal>
      </View>
    )
  }
}

Modal.propTypes = {
  modalVisible: PropTypes.bool,
  details: PropTypes.shape({
    serialNo: PropTypes.string,
    phoneNo: PropTypes.string,
  }),
  onNavigate: PropTypes.func,
}

Modal.defaultProps = {
  modalVisible: false,
  details: {
    serialNo: '',
    phoneNo: '',
  },
  onNavigate: () => {},
}
export default Modal
