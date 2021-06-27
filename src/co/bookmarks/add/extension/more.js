import React from 'react'
import { PropTypes } from 'prop-types'

import { More, Menu } from '~co/overlay/popover'
import File from '../fallback/file'

function BookmarksAddMore(props) {
    return (
        <More variant='primary'>
            <Menu>
                <File {...props} />
            </Menu>
        </More>
    )
}

BookmarksAddMore.propTypes = {
    spaceId:    PropTypes.any,
    onEdit:     PropTypes.func
}

export default BookmarksAddMore