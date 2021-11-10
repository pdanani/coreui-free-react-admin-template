import React from 'react'
import {
  CRow,
  CCol,
  CDropdown,
  CDropdownMenu,
  CDropdownItem,
  CDropdownToggle,
  CWidgetStatsA,
} from '@coreui/react'
import { getStyle } from '@coreui/utils'
import { CChartBar, CChartLine } from '@coreui/react-chartjs'
import CIcon from '@coreui/icons-react'
import { cilArrowBottom, cilArrowTop, cilOptions } from '@coreui/icons'

const WidgetsDropdown = () => {
  return (
    <CRow>
      <CCol sm={9} lg={3}>
        <CWidgetStatsA
          className="mb-4 pt-4 pb-5 text-center"
          color="primary"
          value={<>Total Vaccinations 3,117,856,766 </>}
        />
      </CCol>
      <CCol sm={6} lg={3}>
        <CWidgetStatsA
          className="mb-4 pt-4 pb-5 text-center"
          color="info"
          value={<>Total Cases Worldwide 251,965,012 </>}
        />
      </CCol>
      <CCol sm={6} lg={3}>
        <CWidgetStatsA
          className="mb-4 pt-4 pb-5 text-center"
          color="warning"
          value={<>Total Deaths Worldwide 5,085,397</>}
        />
      </CCol>
      <CCol sm={6} lg={3}>
        <CWidgetStatsA
          className="mb-4 pt-4 pb-5 text-center"
          color="danger"
          value={<>Total Tests Taken in USA 632,000,000 </>}
        />
      </CCol>
    </CRow>
  )
}

export default WidgetsDropdown
