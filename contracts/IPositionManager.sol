// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/IERC721Metadata.sol";

interface IPositionManager is IERC721Metadata {
    struct Position {
        uint256 id;
        address owner;
        address holdToken;
        address collateralToken;
        uint256 amount;
        uint256 amountOut;
        uint256 takeProfit;
        uint256 stopLoss;
        uint256 createdAt;
    }

    struct PositionParams {
        address holdToken;
        address collateralToken;
        uint256 amount;
        uint256 takeProfit;
        uint256 stopLoss;
    }

    //function mint(address holdToken, address collateralToken, uint256 amount, bool swapOnMint, uint256 stopLoss, uint256 takeProfit) external returns(uint256 tokenId);
    function mint(PositionParams calldata params) external returns(uint256 tokenId);
    function burn(uint256 tokenId) external;
    function deposit(uint256 tokenId, uint256 amount) external;
    function withdraw(uint256 tokenId, uint256 amount) external;
    function getPosition(uint256 tokenId) external view returns(Position memory);
    function getOwnedPositions() external view returns(uint256[] memory);

    event FeeWasUpdated(uint8);
    event PositionWasOpened(Position);
    event PositionWasClosed(Position);
    event PositionWasUpdated(Position);
}
