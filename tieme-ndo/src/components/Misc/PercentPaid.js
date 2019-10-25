import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchData } from '../../actions/index';
import styled from 'styled-components';

const PercentPaid = (props) => {
    useEffect(() => {
        props.fetchData();
        }, []);

    const percentCalculator = (array) => {
        let accountsPaid = 0
        for(let i = 0; i < array.length; i++) { 
            if (array[i].dueAmount === 0 || array[i].dueAmount === null) {
                accountsPaid = accountsPaid + 1;
            }
        };
        return accountsPaid;
    }

    const StyledDiv = styled.h3`
        color: #333333;
        padding: 5px 18px;
        border: 3px solid #73A85A;
        border-radius: 50px;
        font-family: 'Work Sans', sans-serif;
        visibility: ${props.visibility};
    `

    return (
        <StyledDiv>
            Percent Paid: {Math.round((percentCalculator(props.clients) / props.clients.length) * 100)}%
        </StyledDiv>
    );
}

const mapStateToProps = state => {
    return {
      clients: state.farmers
    }
  }
  
  export default connect(mapStateToProps, { fetchData })(PercentPaid);