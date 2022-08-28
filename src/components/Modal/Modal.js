import React from 'react'
import PropTypes from 'prop-types'
import {
  Modal as BaseModal,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native'
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
      content: {},
    }
  }

  componentDidMount() {
    const { details } = this.props
    if (['wifi', 'loading'].includes(details?.initial.type)) {
      const timer = setInterval(this.tick, 1000)
      this.setState({ timer })
    }

    this.setState({ content: details?.initial })
  }

  componentWillUnmount() {
    const { timer } = this.state
    clearInterval(timer)
  }

  tick = () => {
    const { details } = this.props
    const { counter, content } = this.state
    this.setState((prevState) => ({ counter: prevState.counter + 10 }))

    if (counter >= content?.endTime) {
      this.setState({ content: details?.afterCounter })
    }
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
      bodyText: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: scale(15),
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
      actionButton: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        width: '100%',
        height: scale(60),
        borderColor: colors.lightGray,
        borderWidth: 3,
      },
      acceptText: {
        color: colors.darkBlue,
        marginHorizontal: 10,
        fontSize: scale(14),
        textTransform: 'uppercase',
      },
      rejectText: {
        fontSize: scale(14),
        textAlign: 'center',
        textTransform: 'uppercase',
      },

      extraButton: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        height: scale(60),
        borderColor: colors.lightGray,
        borderWidth: 3,
      },
      extrBtnText: {
        color: colors.darkBlue,
        fontSize: scale(16),
        textAlign: 'center',
        textTransform: 'uppercase',
      },
    })
    const { modalVisible, onNavigate } = this.props
    const { counter, content } = this.state

    if (counter >= (content?.endTime || 0) + 150 && content?.nextScreen) onNavigate(content?.nextScreen)

    return (
      <View style={styles.centeredView}>
        <BaseModal animationType="slide" transparent visible={modalVisible}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.heading} content={content?.title} />
              <Text content={content?.subTitle} />
              {content?.icon && (
                <View style={styles.iconContainer}>
                  <MaterialCommunityIcons
                    name={content?.icon}
                    color="white"
                    size={60 * 0.5}
                  />
                </View>
              )}
              {content?.bodyText && (
                <View style={styles.bodyText}>
                  {content.bodyText?.map((text) => (
                    <View key={text}>
                      <Text content={text} />
                    </View>
                  ))}
                </View>
              )}
              {content?.type === 'loading' && (
                <View style={styles.progressContianer}>
                  <View style={[styles.progress, { width: `${counter}%` }]} />
                </View>
              )}
              {content?.type === 'wifi' && (
                <View style={styles.progressContianer}>
                  <View style={[styles.progress, { width: `${counter}%` }]} />
                </View>
              )}
              {content?.footerText && (
                <View style={styles.bodyText}>
                  {content.footerText?.map((text) => (
                    <View key={text}>
                      <Text content={text} />
                    </View>
                  ))}
                </View>
              )}
              {content?.buttons?.map((btn) => (
                <View key={btn.name} style={styles.extraButton}>
                  <TouchableOpacity onPress={() => onNavigate(btn.url)}>
                    <Text content={btn.name} style={styles.extrBtnText} />
                  </TouchableOpacity>
                </View>
              ))}
              {(content?.accept || content?.reject) && (
                <View style={styles.actionButton}>
                  <TouchableOpacity
                    onPress={() => onNavigate(content.reject.url)}
                  >
                    <Text
                      content={content.reject.name}
                      style={styles.rejectText}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => onNavigate(content.accept.url)}
                  >
                    <Text
                      content={content.accept.name}
                      style={styles.acceptText}
                    />
                  </TouchableOpacity>
                </View>
              )}

              {/* buttons
              accept and reject */}
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
  details: {},
  onNavigate: () => {},
}
export default Modal
