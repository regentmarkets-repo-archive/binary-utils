import askPriceFromProposal from './askPriceFromProposal';

const netProfitFromProposal = proposal =>
    +proposal.payout - +proposal.ask_price;

export default proposal =>
    netProfitFromProposal(proposal) / askPriceFromProposal(proposal) * 100;
