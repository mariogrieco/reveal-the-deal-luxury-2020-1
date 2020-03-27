// @flow
import * as React from 'react'

import supportedThemes from './themes/__supportedThemes.js'

import withTheme from 'hoc/withTheme'

type Props = {
  onCancel?: (e: SyntheticEvent) => void,
  isLoading?: boolean,
  cancelLabel?: string,
  label?: string,
  color?: string,
  size?: string
};

class FormSubmit extends React.Component<Props> {
  static defaultProps = {
      isLoading: false,
      color: 'primary',
      size: 'medium',
      cancel: 'Cancel',
      submit: 'Submit'
  };

  render () {
      const style = this.theme.button
      return (
          <>
              <button style={style} disabled={this.props.isLoading} color='primary' size='medium'>
                  {this.props.label}
              </button>

              {this.props.onCancel && (
                  <button
                      style={style}
                      disabled={this.props.isLoading}
                      link
                      color='danger'
                      size='medium'
                      onClick={this.props.onCancel}
                  >
                      {this.props.cancelLabel}
                  </button>
              )}
          </>
      )
  }
}

export default withTheme(supportedThemes)(FormSubmit)
