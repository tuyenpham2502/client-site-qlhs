import React from 'react'

type Props = {
    isLoading: boolean
}


const FilipingUI = (props: Props) => {
    const { isLoading } = props
    return (
        <>
            {
                isLoading && (
                    <div className="full_page_loading">
                        <div className="bars"></div>
                    </div>
                )
            }
        </>
    )

}


export default FilipingUI


