export default (proposal: Proposal): number =>
    proposal && +proposal.ask_price;
