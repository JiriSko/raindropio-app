import React from 'react'
import t from '~t'
import { humanNumber } from '~modules/strings'

import Icon from '~co/common/icon'
import SuperLink from '~co/common/superLink'

export default class FiltersType extends React.Component {
    render() {
        const { _id, count, to, active } = this.props
        const { onContextMenu } = this.props

        return (
            <article className={`collection menu-item ${active && 'active'}`}>
                <span className='expand'>
                    <Icon name='arrow_alt' />
                </span>

                <Icon name={_id} className='collectionIcon' />

                <div className='title'>{t.s(_id)}</div>

                <div className='space' />

                {count ? <div className='count'>{humanNumber(count)}</div> : null}

                <SuperLink
                    to={to}
                    navPrefix='menu-item'
                    tabIndex={active ? '1' : '-1'}
                    onContextMenu={onContextMenu}
					className='permalink' />
            </article>
        )
    }
}