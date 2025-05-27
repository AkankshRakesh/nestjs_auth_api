import { Controller, Get, Request, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from './auth/guards/jwt-auth.guard';

@Controller()
@ApiTags('Status')
export class AppController {
  @Get('status')
  @ApiOperation({ summary: 'Check API status' })
  @ApiResponse({ status: 200, description: 'API is running' })
  getStatus() {
    return { status: 'OK' };
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  @ApiBearerAuth('access-token')
  @ApiOperation({ summary: 'Get user profile' })
  @ApiResponse({ status: 200, description: 'User profile returned', schema: { example: { id: 1, email: 'user@example.com', name: 'Test User' } } })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  getProfile(@Request() req) {
    // Only return safe fields
    const { id, email, name } = req.user;
    return { id, email, name };
  }
}